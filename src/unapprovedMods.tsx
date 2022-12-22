import { ActionPanel, Detail, List, Action, Image } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { modIoAPIToken } from "./preferences";
import { GetMods, ModObject } from "./types";

export default function Command() {
  const { data, isLoading } = useFetch<GetMods>(
    "https://api.mod.io/v1/games/3693/mods?status=0&visible-in=0,1&modfile-min=1",
    {
      headers: { Authorization: `Bearer ${modIoAPIToken}` },
    }
  );
  return (
    <List isShowingDetail isLoading={isLoading}>
      {data?.data.reverse().map((item) => (
        <List.Item
          key={item.id}
          icon={{
            source: item.logo.thumb_320x180,
            mask: Image.Mask.RoundedRectangle,
          }}
          title={`${item.name}`}
          detail={<ModListDetail item={item} />}
          actions={
            <ActionPanel>
              <Action.Push title="Show Details" target={<ModDetail item={item} />} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}

function ModDetail(props: { item: ModObject }) {
  return (
    <Detail
      markdown={`# ${props.item.name}\n![Mod Thumbnail](${props.item.logo.thumb_320x180})\n#### Summary\n*${props.item.summary}*\n#### Description\n${props.item.description_plaintext}`}
      navigationTitle={props.item.name}
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.Label title="Height" text={`1' 04"`} />
          <Detail.Metadata.Label title="Weight" text="13.2 lbs" />
          <Detail.Metadata.TagList title="Tags">
            {props.item.tags.map((tag) => (
              <Detail.Metadata.TagList.Item key={tag.name} text={tag.name} color={"#00a5e0"} />
            ))}
          </Detail.Metadata.TagList>
          <Detail.Metadata.Separator />
          <Detail.Metadata.Link title="Evolution" target="https://www.pokemon.com/us/pokedex/pikachu" text="Raichu" />
        </Detail.Metadata>
      }
    />
  );
}

function ModListDetail(props: { item: ModObject }) {
  return (
    <List.Item.Detail
      markdown={`# ${props.item.name}\n#### Summary\n*${props.item.summary}*\n#### Description\n${props.item.description_plaintext}`}
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title="Mod Information" />
          <List.Item.Detail.Metadata.Label title="Resource ID" text={String(props.item.id)} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="Author"
            icon={{
              source: props.item.submitted_by.avatar.thumb_50x50,
              mask: Image.Mask.Circle,
            }}
            text={props.item.submitted_by.username}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label title="File Name" text={String(props.item.modfile?.filename)} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="File Size"
            text={`${String((props.item.modfile!.filesize / 1000000).toFixed(2))} MB`}
          />
        </List.Item.Detail.Metadata>
      }
    />
  );
}

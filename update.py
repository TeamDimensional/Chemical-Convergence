import tomllib
import os
import pathlib
import dataclasses
import urllib.request
import urllib.parse


@dataclasses.dataclass
class DownloadFile:
    name: str
    filename: str
    project_id: str

    @property
    def url(self):
        first, last = self.project_id[:-3], self.project_id[-3:]
        return f"https://edge.forgecdn.net/files/{first}/{last}/{urllib.parse.quote(self.filename)}"


path = pathlib.Path(__file__).parent / "minecraft" / "mods"
skipped = 0
downloaded = []
needed_files = set()
deleted_files = []

for fn in os.listdir(path / ".index"):
    with open(path / ".index" / fn, "rb") as fd:
        data = tomllib.load(fd)

    mn = data["filename"]
    needed_files.add(mn)
    if (path / mn).exists():
        skipped += 1
    else:
        downloaded.append(DownloadFile(data["name"], mn, str(data["update"]["curseforge"]["file-id"])))


for fn in os.listdir(path):
    if not fn.endswith("jar") or fn in needed_files:
        continue
    deleted_files.append(fn)


if not deleted_files and not downloaded:
    print("All mods are already downloaded!")
else:
    if skipped:
        print(f"Skipping {skipped} mods as they're already installed.")
    if deleted_files:
        if input(f"{len(deleted_files)} files need to be deleted. Continue? (Y/n) ").lower() != "n":
            for f in deleted_files:
                os.unlink(path / f)
    if downloaded:
        if input(f"{len(downloaded)} files need to be downloaded. Continue? (Y/n) ").lower() != "n":
            for df in downloaded:
                print(f"Downloading {df.name}...")
                with urllib.request.urlopen(df.url) as req:
                    with open(path / df.filename, "wb") as output:
                        while chunk := req.read(524288):
                            output.write(chunk)

    print("All done!")

from collections.abc import Iterable, Sequence

from ._types import ErrorCorrect
from .image.base import BaseImage, DrawerAliases as DrawerAliases

default_factories: dict[str, str]
error_correction: dict[str, ErrorCorrect]

def main(args: Sequence[str] | None = None) -> None: ...
def get_factory(module: str) -> type[BaseImage]: ...
def get_drawer_help() -> str: ...
def commas(items: Iterable[str], joiner: str = "or") -> str: ...

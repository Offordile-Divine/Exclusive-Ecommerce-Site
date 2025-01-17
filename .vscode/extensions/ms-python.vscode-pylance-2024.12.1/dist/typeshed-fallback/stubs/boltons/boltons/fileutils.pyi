from _typeshed import StrOrBytesPath
from collections.abc import Callable, Generator, Iterable
from types import TracebackType
from typing import IO, Any, NoReturn
from typing_extensions import Self

def mkdir_p(path: StrOrBytesPath) -> None: ...

class FilePerms:
    user: str
    group: str
    other: str
    def __init__(self, user: str = "", group: str = "", other: str = "") -> None: ...
    @classmethod
    def from_int(cls, i: int) -> Self: ...
    @classmethod
    def from_path(cls, path: StrOrBytesPath) -> Self: ...
    def __int__(self) -> int: ...

def atomic_save(dest_path: str, **kwargs) -> AtomicSaver: ...

class AtomicSaver:
    dest_path: str
    overwrite: bool
    file_perms: int
    overwrite_part: bool
    part_filename: str
    rm_part_on_exc: bool
    text_mode: bool
    buffering: int
    dest_dir: str
    part_path: str
    mode: str
    open_flags: int
    part_file: str | None
    def __init__(self, dest_path: str, **kwargs) -> None: ...
    def setup(self) -> None: ...
    def __enter__(self) -> IO[Any] | None: ...
    def __exit__(
        self, exc_type: type[BaseException] | None, exc_val: BaseException | None, exc_tb: TracebackType | None
    ) -> None: ...

def iter_find_files(
    directory: str,
    patterns: str | Iterable[str],
    ignored: str | Iterable[str] | None = None,
    include_dirs: bool = False,
    max_depth: int | None = None,
) -> Generator[str, None, None]: ...
def copy_tree(
    src: StrOrBytesPath,
    dst: StrOrBytesPath,
    symlinks: bool = False,
    ignore: None | Callable[[str, list[str]], Iterable[str]] | Callable[[StrOrBytesPath, list[str]], Iterable[str]] = None,
) -> None: ...

copytree = copy_tree

class DummyFile:
    name: str
    mode: str
    closed: bool
    errors: None
    isatty: bool
    encoding: None
    newlines: None
    softspace: int
    def __init__(self, path: StrOrBytesPath, mode: str = "r", buffering: int | None = None) -> None: ...
    def close(self) -> None: ...
    def fileno(self) -> int: ...
    def flush(self) -> None: ...
    def next(self) -> NoReturn: ...
    def read(self, size: int = 0) -> str: ...
    def readline(self, size: int = 0) -> str: ...
    def readlines(self, size: int = 0) -> list[str]: ...
    def seek(self) -> None: ...
    def tell(self) -> int: ...
    def truncate(self) -> None: ...
    def write(self, string: str) -> None: ...
    def writelines(self, list_of_strings: list[str]) -> None: ...
    def __next__(self) -> NoReturn: ...
    def __enter__(self) -> None: ...
    def __exit__(self, exc_type, exc_val, exc_tb) -> None: ...

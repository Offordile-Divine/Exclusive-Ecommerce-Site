# -*- coding: utf-8 -*-
# -----------------------------------------------------------------------------
# Copyright (c) 2014, Nicolas P. Rougier. All rights reserved.
# Distributed under the terms of the new BSD License.
# -----------------------------------------------------------------------------
import numpy as np
from numpy.typing import ArrayLike

class ArrayList(object):
    def __init__(
        self,
        data: ArrayLike | None = None,
        itemsize: int | ArrayLike | None = None,
        dtype: np.dtype = ...,
        sizeable: bool = True,
        writeable: bool = True,
    ): ...
    @property
    def data(self): ...
    @property
    def size(self): ...
    @property
    def itemsize(self): ...
    @property
    def dtype(self): ...
    def reserve(self, capacity): ...
    def __len__(self): ...
    def __str__(self): ...
    def __getitem__(self, key): ...
    def __setitem__(self, key, data): ...
    def __delitem__(self, key): ...
    def insert(self, index: int, data: ArrayLike, itemsize: int | ArrayLike | None = None): ...
    def append(self, data: ArrayLike, itemsize: int | ArrayLike | None = None): ...

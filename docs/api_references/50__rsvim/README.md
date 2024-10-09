The global namespace for `Rsvim` specific, non-standard WinterCG APIs.

:::danger
Rsvim editor exposes the rust implemented APIs to the JavaScript world by binding it to the `__InternalRsvimGlobalObject` global object, which you should never use directly.
:::

## Index

### Interfaces

<table>
<thead>
<tr>
<th>Interface</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[Rsvim](interfaces/Rsvim.md)

</td>
<td>

The `Rsvim` global object, it contains multiple sub fields:

- `Rsvim.opt`: Global editor options, also see [RsvimOpt](interfaces/RsvimOpt.md).

</td>
</tr>
<tr>
<td>

[RsvimOpt](interfaces/RsvimOpt.md)

</td>
<td>

The `Rsvim.opt` global object, also see [Rsvim](interfaces/Rsvim.md).

</td>
</tr>
</tbody>
</table>

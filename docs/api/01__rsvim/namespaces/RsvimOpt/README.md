The `Rsvim.opt` global object for global editor options. These options will change the editor's behavior
and suit user's personal habits.

There are 3 kinds of editor option:
- Global options: Options that are global that you use one value for all Rsvim component instances such
  as buffer, window, statusline, etc. When you change the option, it will take effect immediately and
  affect all existing instances.
- Local options: Options that only apply to one component instance, each instance has its own copy of
  this option, thus each can have its own value. This allow you to set an option in one instance, without
  modifying other instances.
- Global local options: Options that are global, and will be copy to a newly created Rsvim component
  instance. A global-local-option always has its corresponding local-option. When you change the option,
  it only will apply to the newly created instances, but cannot modify existing instances.

## Example

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[FileEncodingOption](type-aliases/FileEncodingOption.md)

</td>
<td>

**See**

[RsvimOpt.fileEncoding](../../variables/RsvimOpt.md#fileencoding)

</td>
</tr>
<tr>
<td>

[FileFormatOption](type-aliases/FileFormatOption.md)

</td>
<td>

**See**

[RsvimOpt.fileFormat](../../variables/RsvimOpt.md#fileformat)

</td>
</tr>
</tbody>
</table>

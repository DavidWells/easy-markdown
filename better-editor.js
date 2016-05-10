/*
  Allows for better code formatting in text editor
  Adds tabs spacing
*/
jQuery(document).ready(function($) {

  var tab = "  ";

  function checkTab(evt) {
    var t = evt.target;
    console.log(t)
    var ss = t.selectionStart;
    var se = t.selectionEnd;
    var key = evt.keyCode || evt.charCode || 0;
    var commandPressed = evt.metaKey
    var numberOfLines = t.value.slice(ss, se).split('\n');
    // Command + [
    if (evt.keyCode === 219 && commandPressed) {
      evt.preventDefault();
      var pre = t.value.slice(0, ss);
      var sel = t.value.slice(ss, se).split('\n');
      var post = t.value.slice(se, t.value.length);
      var newSel = []
      var count = 0
      for (var i = 0; i < sel.length; i++) {
        if (sel[i].match(tab)) {
          count++
        }
        newSel.push(sel[i].replace(tab, ''))
      }
      var updatedContent = newSel.join('\n')
      t.value = pre.concat(updatedContent).concat(post);
      t.selectionStart = ss;
      t.selectionEnd = se - (tab.length * count);
    }
    // Tab key - insert tab expansion
    if (evt.keyCode === 9) {
      evt.preventDefault();

      // Special case of multi line selection
      if (ss != se && t.value.slice(ss, se).indexOf("\n") != -1) {
        var pre = t.value.slice(0, ss);
        var sel = t.value.slice(ss, se).replace(/\n/g, "\n" + tab);
        var post = t.value.slice(se, t.value.length);
        t.value = pre.concat(tab).concat(sel).concat(post);
        t.selectionStart = ss;
        t.selectionEnd = se + (tab.length * (numberOfLines.length));
      } else {
        // "Normal" case (no selection or selection on one line only)
        t.value = t.value.slice(0, ss).concat(tab).concat(t.value.slice(ss, t.value.length));
        if (ss === se) {
          t.selectionStart = t.selectionEnd = ss + tab.length;
        } else {
          t.selectionStart = ss + tab.length;
          t.selectionEnd = se + tab.length;
        }
      }
    } else if (evt.keyCode === 8 && t.value.slice(ss - 2, ss) === tab) {
      // Backspace key - delete preceding tab expansion, if exists
      evt.preventDefault();

      t.value = t.value.slice(0, ss - 2).concat(t.value.slice(ss, t.value.length));
      t.selectionStart = t.selectionEnd = ss - tab.length;
    } else if (evt.keyCode === 46 && t.value.slice(se, se + 2) === tab) {
      // Delete key - delete following tab expansion, if exists
      evt.preventDefault();
      t.value = t.value.slice(0, ss).concat(t.value.slice(ss + 2, t.value.length));
      t.selectionStart = t.selectionEnd = ss;
    } else if (evt.keyCode === 37 && t.value.slice(ss - 2, ss) === tab) {
      // Left arrow keys - move across the tab in one go
      evt.preventDefault();
      t.selectionStart = t.selectionEnd = ss - 2;
    } else if (evt.keyCode === 39 && t.value.slice(ss, ss + 2) === tab) {
      // Right arrow keys - move across the tab in one go
      evt.preventDefault();
      t.selectionStart = t.selectionEnd = ss + 2;
    }
  }

  var textarea = document.getElementsByTagName('textarea')[0];

  textarea.onkeydown = checkTab


});

function getCaretPosition(editableDiv) {
  var caretPos = 0,
    sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == editableDiv) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() == editableDiv) {
      var tempEl = document.createElement("span");
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      var tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
}

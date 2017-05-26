# 10334 :boom: whitestuff site  :rocket:

### background  :bell:
- Low stock levels were a cause of frustration     
- users commented on the high levels of out of stocks. This could force users to shop elsewhere     

### objective :book:
Adding a shop by size filter to appear as a sticky footer on the product listing page prompts the user    
to select their sizes earlier in the journey to avoid viewing products not in their size.    

### design changes to be injected into site with javascript   :pencil:
- add size filter popup on the bottom towards right of screen
- list sizes vertically across 3 columns
- when user has selected a size display a tick in the size box
- when popup is closed use - in top right hand corner to close
- when popup is close user + in top right hand corner to open
- before user has selected a size display text "Select several sizes to broaden your choices"
#### considerations  :watch: 
- same functionality as 'refine by size' filter on right hand navigation.
- results page auto update once user has selected a size
- sticky in its position on the screen
- when user land on any of listed URL's display open popup
- if user closes the popup and then moves onto another listed URL keep it closed
- when user selects a size then moves onto another listed URL display popup with unselected sizes once    
  again. Don't carry forward sizes across categories.
 
 
 <kbd>control image</kbd> :rocket:       
 ![](/images/whiteStuff.png)

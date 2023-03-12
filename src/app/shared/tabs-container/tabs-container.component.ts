import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  /*setting each tab off */
  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false
    })

    /*setting the active property */
    tab.active = true

    /*prevent the default behavior of '#' on URL*/
    return false
  }

}

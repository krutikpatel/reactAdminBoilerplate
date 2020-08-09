import React, { Component } from 'react'

export default class SidebarContent extends Component {
    render() {
        return (
            <div>
                  {/* Control Sidebar */}
<aside className="control-sidebar control-sidebar-light">
  {/* Control sidebar content goes here */}
  <div className="p-3">
    <h5>Title</h5>
    <p>Sidebar content</p>
  </div>
</aside>
{/* /.control-sidebar */}

            </div>
        )
    }
}

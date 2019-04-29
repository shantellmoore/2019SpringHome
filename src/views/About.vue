

<!--<template>
  <div class="row">
    <div class="col">
      <h1>This is {{name}}'s page. She is {{age}} years old</h1>
      <input v-model="age" type="text" class="form-control" placeholder="Age"/>
      <div class="progress">
       <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: age + '%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Shan",
    age: "23"
  })
}
</script>

<style type="scss"> -->
<template>
  
<div class="row">
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
              Tracked Meals <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              Workouts
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>              
              Goals
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>             
             Sleep
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">{{name}}'s Page</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          </button>
        </div>
      </div>

<canvas class="my-4 w-100 chartjs-render-monitor" id="myChart" width="1950" height="822" style="display: block; height: 411px; width: 975px;"></canvas>
      <h2>Overall Fitness</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Activity Duration</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-1-19</td>
              <td>Running</td>
              <td>45mins</td>
              <td>400</td>
            </tr>
            <tr>
              <td>1-1-19</td>
              <td>Running</td>
              <td>45mins</td>
              <td>400</td>
            </tr>
            <tr>
              <td>1-1-19</td>
              <td>Running</td>
              <td>45mins</td>
              <td>400</td>
            </tr>
            <tr>
              <td>1-1-19</td>
              <td>Running</td>
              <td>45mins</td>
              <td>400</td>
            </tr>
            <tr>
             <td>1-1-19</td>
              <td>Running</td>
              <td>45mins</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>

</template>
<script>
export default {
  data: () => ({
    name: "Shantell",
    age: "23"
  })
}
</script>

<style type="scss">

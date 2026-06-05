# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-14 01:05](#error-2026-05-14t0105490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.07s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.02s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.02s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.10s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-06-02 01:12](#error-2026-06-02t0112190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 39 seconds
- 2026-05-08 PASS 40 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2664004Z === RUN   TestAccProject_withUpdatedLimits
2026-05-09T00:56:55.2671543Z === CONT  TestAccProject_withUpdatedLimits
2026-05-09T00:56:55.2684222Z === NAME  TestAccProject_withUpdatedLimits
2026-05-09T00:56:55.2684774Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-09T00:56:55.2685186Z         
2026-05-09T00:56:55.2685605Z         Error: error creating project: test-acc-tf-p-1487428483401318880
2026-05-09T00:56:55.2685973Z         
2026-05-09T00:56:55.2686270Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2687109Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2687847Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2688150Z         
2026-05-09T00:56:55.2688622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2689270Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2689864Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2690279Z --- FAIL: TestAccProject_withUpdatedLimits (64.49s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 23 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 24 seconds
- 2026-05-14

### Error 2026-05-14T01:05:49+00:00
```
2026-05-14T01:05:49.3901890Z === RUN   TestAccProject_withUpdatedLimits
2026-05-14T01:05:49.3911719Z === CONT  TestAccProject_withUpdatedLimits
2026-05-14T01:05:49.3994203Z === NAME  TestAccProject_withUpdatedLimits
2026-05-14T01:05:49.3994745Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-14T01:05:49.3995169Z         
2026-05-14T01:05:49.3995616Z         Error: error creating project: test-acc-tf-p-1171706407705289028
2026-05-14T01:05:49.3995977Z         
2026-05-14T01:05:49.3996282Z           with mongodbatlas_project.test,
2026-05-14T01:05:49.3996899Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:05:49.3997469Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:05:49.3997774Z         
2026-05-14T01:05:49.3998252Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:05:49.3998903Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:05:49.3999497Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:05:49.4000083Z --- FAIL: TestAccProject_withUpdatedLimits (79.72s)
```

- 2026-05-15 PASS 24 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7290150Z === RUN   TestAccProject_withUpdatedLimits
2026-05-16T00:55:42.7294929Z === CONT  TestAccProject_withUpdatedLimits
2026-05-16T00:55:42.7401580Z === NAME  TestAccProject_withUpdatedLimits
2026-05-16T00:55:42.7402113Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-16T00:55:42.7402520Z         
2026-05-16T00:55:42.7402952Z         Error: error creating project: test-acc-tf-p-9196543167324391984
2026-05-16T00:55:42.7403309Z         
2026-05-16T00:55:42.7403611Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7404333Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7404917Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7405224Z         
2026-05-16T00:55:42.7405701Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7406347Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7406951Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7407371Z --- FAIL: TestAccProject_withUpdatedLimits (74.26s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 25 seconds
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0634627Z === RUN   TestAccProject_withUpdatedLimits
2026-05-19T01:03:15.0639583Z === CONT  TestAccProject_withUpdatedLimits
2026-05-19T01:03:15.0757902Z === NAME  TestAccProject_withUpdatedLimits
2026-05-19T01:03:15.0758454Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:03:15.0758865Z         
2026-05-19T01:03:15.0759300Z         Error: error creating project: test-acc-tf-p-6669304228055873707
2026-05-19T01:03:15.0759669Z         
2026-05-19T01:03:15.0759984Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0760606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0761475Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0761797Z         
2026-05-19T01:03:15.0762279Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0762930Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0763527Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0763946Z --- FAIL: TestAccProject_withUpdatedLimits (107.20s)
```

- 2026-05-20 PASS 35 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9149312Z === RUN   TestAccProject_withUpdatedLimits
2026-05-21T01:04:31.9156164Z === CONT  TestAccProject_withUpdatedLimits
2026-05-21T01:04:31.9329669Z === NAME  TestAccProject_withUpdatedLimits
2026-05-21T01:04:31.9330181Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:04:31.9330721Z         
2026-05-21T01:04:31.9331126Z         Error: error creating project: test-acc-tf-p-7146244164425736036
2026-05-21T01:04:31.9331488Z         
2026-05-21T01:04:31.9331786Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9332385Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9332953Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9333253Z         
2026-05-21T01:04:31.9333710Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9334359Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9334944Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9335367Z --- FAIL: TestAccProject_withUpdatedLimits (89.19s)
```

- 2026-05-22 PASS 33 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0942588Z === RUN   TestAccProject_withUpdatedLimits
2026-05-23T01:02:27.0949883Z === CONT  TestAccProject_withUpdatedLimits
2026-05-23T01:02:27.1057110Z === NAME  TestAccProject_withUpdatedLimits
2026-05-23T01:02:27.1057646Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-23T01:02:27.1058059Z         
2026-05-23T01:02:27.1058481Z         Error: error creating project: test-acc-tf-p-1285921384878797067
2026-05-23T01:02:27.1058966Z         
2026-05-23T01:02:27.1059272Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1059889Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1060482Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1060786Z         
2026-05-23T01:02:27.1061259Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1061909Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1062506Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1062929Z --- FAIL: TestAccProject_withUpdatedLimits (72.96s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 24 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1895990Z === RUN   TestAccProject_withUpdatedLimits
2026-05-26T02:10:57.1902607Z === CONT  TestAccProject_withUpdatedLimits
2026-05-26T02:10:57.2008698Z === NAME  TestAccProject_withUpdatedLimits
2026-05-26T02:10:57.2009228Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-26T02:10:57.2009623Z         
2026-05-26T02:10:57.2010042Z         Error: error creating project: test-acc-tf-p-290589504684921358
2026-05-26T02:10:57.2010389Z         
2026-05-26T02:10:57.2010681Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.2011290Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.2011856Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.2012149Z         
2026-05-26T02:10:57.2012608Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.2013257Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.2013844Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.2014247Z --- FAIL: TestAccProject_withUpdatedLimits (75.75s)
```

- 2026-05-27 PASS 26 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1600541Z === RUN   TestAccProject_withUpdatedLimits
2026-05-28T00:58:34.1608408Z === CONT  TestAccProject_withUpdatedLimits
2026-05-28T00:58:34.1744936Z === NAME  TestAccProject_withUpdatedLimits
2026-05-28T00:58:34.1745460Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-28T00:58:34.1745888Z         
2026-05-28T00:58:34.1746308Z         Error: error creating project: test-acc-tf-p-7955271662074732067
2026-05-28T00:58:34.1746678Z         
2026-05-28T00:58:34.1747164Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1747973Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1748569Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1748880Z         
2026-05-28T00:58:34.1749359Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1750019Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1750615Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1751040Z --- FAIL: TestAccProject_withUpdatedLimits (75.03s)
```

- 2026-05-29 PASS 25 seconds
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3450400Z === RUN   TestAccProject_withUpdatedLimits
2026-05-30T01:02:11.3458572Z === CONT  TestAccProject_withUpdatedLimits
2026-05-30T01:02:11.3477210Z === NAME  TestAccProject_withUpdatedLimits
2026-05-30T01:02:11.3477875Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-05-30T01:02:11.3478321Z         
2026-05-30T01:02:11.3478760Z         Error: error creating project: test-acc-tf-p-4577639685072940281
2026-05-30T01:02:11.3479150Z         
2026-05-30T01:02:11.3479472Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3480772Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3481386Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3481717Z         
2026-05-30T01:02:11.3482213Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3482897Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3483649Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3484097Z --- FAIL: TestAccProject_withUpdatedLimits (64.17s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 25 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2435824Z === RUN   TestAccProject_withUpdatedLimits
2026-06-02T01:12:19.2446957Z === CONT  TestAccProject_withUpdatedLimits
2026-06-02T01:12:19.2541358Z === NAME  TestAccProject_withUpdatedLimits
2026-06-02T01:12:19.2542272Z     resource_project_test.go:878: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:12:19.2542984Z         
2026-06-02T01:12:19.2543716Z         Error: error creating project: test-acc-tf-p-6691071807201879602
2026-06-02T01:12:19.2544343Z         
2026-06-02T01:12:19.2544864Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2545904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2546870Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2547394Z         
2026-06-02T01:12:19.2548196Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:19.2549303Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:19.2550309Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:19.2551014Z --- FAIL: TestAccProject_withUpdatedLimits (70.99s)
```

- 2026-06-03 PASS 23 seconds
- 2026-06-04 PASS 56 seconds
- 2026-06-05 PASS 23 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 41 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 38 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 41 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

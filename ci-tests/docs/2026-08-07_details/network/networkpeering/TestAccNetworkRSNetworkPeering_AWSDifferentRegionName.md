# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.08s
[2026-07-11 00:53](#error-2026-07-11t0053200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-07-18 00:49](#error-2026-07-18t0049410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.04s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 115.03s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1462666Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-09T00:58:29.1467917Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-09T00:58:29.1480805Z    test_name=TestAccNetworkNetworkPeering_timeouts
2026-07-09T00:58:29.1501297Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-09T00:58:29.1501920Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:58:29.1502358Z         
2026-07-09T00:58:29.1502823Z         Error: error creating project: test-acc-tf-p-5232163349232715667
2026-07-09T00:58:29.1503245Z         
2026-07-09T00:58:29.1503615Z           with mongodbatlas_project.my_project,
2026-07-09T00:58:29.1504322Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-09T00:58:29.1504996Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-09T00:58:29.1505358Z         
2026-07-09T00:58:29.1505878Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:29.1506594Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:29.1507234Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1507778Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (71.80s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:53:20+00:00
```
2026-07-11T00:53:20.3281281Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-11T00:53:20.3302682Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-11T00:53:20.3315385Z   
2026-07-11T00:53:20.3336253Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-11T00:53:20.3336933Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:53:20.3337391Z         
2026-07-11T00:53:20.3337887Z         Error: error creating project: test-acc-tf-p-9163239548681449775
2026-07-11T00:53:20.3338324Z         
2026-07-11T00:53:20.3338725Z           with mongodbatlas_project.my_project,
2026-07-11T00:53:20.3339487Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-11T00:53:20.3340199Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-11T00:53:20.3340765Z         
2026-07-11T00:53:20.3341322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:53:20.3342070Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:53:20.3342757Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:20.3343335Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (62.43s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 minutes
- 2026-07-14 PASS 3 minutes
- 2026-07-15 PASS 3 minutes
- 2026-07-16 PASS 3 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18

### Error 2026-07-18T00:49:41+00:00
```
2026-07-18T00:49:41.0936930Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-18T00:49:41.0939462Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-18T00:49:41.0950125Z    test_terraform_path=/home/runner/work/_temp/31368b9f-a368-4317-8f01-55b96f4cb3ea/terraform test_working_directory=/tmp/plugintest2669089294 test_step_number=1
2026-07-18T00:49:41.0950969Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-07-18T00:49:41.0951538Z         
2026-07-18T00:49:41.0952004Z         Error: error creating project: test-acc-tf-p-8046168210998169207
2026-07-18T00:49:41.0952393Z         
2026-07-18T00:49:41.0952774Z           with mongodbatlas_project.my_project,
2026-07-18T00:49:41.0953429Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-18T00:49:41.0954045Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-18T00:49:41.0954405Z         
2026-07-18T00:49:41.0954897Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:41.0955539Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:41.0956129Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:41.0956636Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (74.43s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4966433Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-21T00:51:26.4969194Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-21T00:51:26.4981486Z    test_terraform_path=/home/runner/work/_temp/8b72dbbb-64b2-4ca7-886a-089204f982e3/terraform test_working_directory=/tmp/plugintest1320586411 test_step_number=1 test_name=TestAccNetworkNetworkPeering_timeouts
2026-07-21T00:51:26.5021509Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-21T00:51:26.5022127Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:51:26.5022739Z         
2026-07-21T00:51:26.5023455Z         Error: error creating project: test-acc-tf-p-6074187533171705664
2026-07-21T00:51:26.5023909Z         
2026-07-21T00:51:26.5024288Z           with mongodbatlas_project.my_project,
2026-07-21T00:51:26.5025011Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-21T00:51:26.5025691Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-21T00:51:26.5026061Z         
2026-07-21T00:51:26.5026582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:51:26.5027295Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:51:26.5027946Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.5028505Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (115.33s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2208703Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-23T00:53:54.2211588Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-07-23T00:53:54.2227898Z   
2026-07-23T00:53:54.2228385Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:53:54.2228837Z         
2026-07-23T00:53:54.2229336Z         Error: error creating project: test-acc-tf-p-2750334674781990967
2026-07-23T00:53:54.2229753Z         
2026-07-23T00:53:54.2230152Z           with mongodbatlas_project.my_project,
2026-07-23T00:53:54.2230890Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-23T00:53:54.2231589Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-23T00:53:54.2231966Z         
2026-07-23T00:53:54.2232519Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:53:54.2233260Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:53:54.2233979Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:53:54.2234799Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:53:54.2235306Z         BadRequestDetail: 
2026-07-23T00:53:54.2248898Z    test_step_number=1
2026-07-23T00:53:54.2259026Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (1.05s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 3 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 minutes
  - PASS 4 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

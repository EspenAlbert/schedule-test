# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:41](#error-2025-09-07t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1db8704811492b5471f/limits | qa | flaky_500 | 249.00s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c41d444485797b21169/limits | qa | flaky_500 | 33.05s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03efe60767b7f9af681/limits | qa | flaky_500 | 34.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 3 minutes
- 2025-09-07

### Error 2025-09-07T00:41:46+00:00
```
2025-09-07T00:41:46.8250454Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-07T00:41:46.8254714Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-07T00:41:46.8288115Z   
2025-09-07T00:41:46.8383231Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-07T00:41:46.8384679Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:41:46.8385571Z         
2025-09-07T00:41:46.8386287Z         Error: error when getting project properties after create
2025-09-07T00:41:46.8386902Z         
2025-09-07T00:41:46.8387651Z           with mongodbatlas_project.my_project,
2025-09-07T00:41:46.8389033Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-07T00:41:46.8390104Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-07T00:41:46.8390664Z         
2025-09-07T00:41:46.8391492Z         error getting project (68bcd1db8704811492b5471f): error getting project's
2025-09-07T00:41:46.8392337Z         limits (68bcd1db8704811492b5471f):
2025-09-07T00:41:46.8393387Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1db8704811492b5471f/limits
2025-09-07T00:41:46.8394621Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:41:46.8395689Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:41:46.8396410Z         BadRequestDetail: 
2025-09-07T00:41:46.8398925Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (249.04s)
```

- 2025-09-08
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-09 PASS 3 minutes
- 2025-09-10 PASS 3 minutes
- 2025-09-11 PASS 3 minutes
- 2025-09-12 PASS 4 minutes
- 2025-09-13 PASS 17 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6334962Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-14T00:41:24.6341727Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-14T00:41:24.6365388Z    test_working_directory=/tmp/plugintest1982440451
2025-09-14T00:41:24.6366323Z     resource_test.go:179: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:41:24.6367004Z         
2025-09-14T00:41:24.6367717Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6368339Z         
2025-09-14T00:41:24.6368940Z           with mongodbatlas_project.my_project,
2025-09-14T00:41:24.6370118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-14T00:41:24.6371211Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-14T00:41:24.6371784Z         
2025-09-14T00:41:24.6372686Z         error getting project (68c60c41d444485797b21169): error getting project's
2025-09-14T00:41:24.6373768Z         limits (68c60c41d444485797b21169):
2025-09-14T00:41:24.6374851Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c41d444485797b21169/limits
2025-09-14T00:41:24.6376111Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6377194Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6377935Z         BadRequestDetail: 
2025-09-14T00:41:24.6378648Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (33.47s)
```

- 2025-09-15
  - PASS 3 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3135126Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-15T06:33:08.3139574Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-15T06:33:08.3155452Z   
2025-09-15T06:33:08.3203090Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-15T06:33:08.3203659Z     resource_test.go:179: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:33:08.3204036Z         
2025-09-15T06:33:08.3204432Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3204767Z         
2025-09-15T06:33:08.3205112Z           with mongodbatlas_project.my_project,
2025-09-15T06:33:08.3205788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-15T06:33:08.3206384Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-15T06:33:08.3206697Z         
2025-09-15T06:33:08.3207168Z         error getting project (68c7b03efe60767b7f9af681): error getting project's
2025-09-15T06:33:08.3207639Z         limits (68c7b03efe60767b7f9af681):
2025-09-15T06:33:08.3208325Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af681/limits
2025-09-15T06:33:08.3209002Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3209588Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3209993Z         BadRequestDetail: 
2025-09-15T06:33:08.3210376Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (34.96s)
```

- 2025-09-16 PASS 3 minutes
- 2025-09-17 PASS 3 minutes
- 2025-09-18 PASS 3 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 3 minutes
- 2025-09-22 PASS 3 minutes
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 4 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 3 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-02 PASS 3 minutes
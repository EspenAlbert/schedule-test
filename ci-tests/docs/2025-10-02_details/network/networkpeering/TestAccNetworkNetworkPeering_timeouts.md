# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 35 TestRuns in dev, qa from 2025-09-05 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c41d444485797b21167/limits | qa | flaky_500 | 34.05s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03ed444485797b5c7eb/limits | qa | flaky_500 | 33.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05 PASS 2 minutes
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 2 minutes
- 2025-09-11 PASS 2 minutes
- 2025-09-12 PASS 2 minutes
- 2025-09-13 PASS 2 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6336542Z === RUN   TestAccNetworkNetworkPeering_timeouts
2025-09-14T00:41:24.6340148Z === CONT  TestAccNetworkNetworkPeering_timeouts
2025-09-14T00:41:24.6452258Z === NAME  TestAccNetworkNetworkPeering_timeouts
2025-09-14T00:41:24.6453824Z     resource_test.go:211: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-14T00:41:24.6454713Z         
2025-09-14T00:41:24.6455432Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6456054Z         
2025-09-14T00:41:24.6456664Z           with mongodbatlas_project.my_project,
2025-09-14T00:41:24.6457846Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-14T00:41:24.6458939Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-14T00:41:24.6459518Z         
2025-09-14T00:41:24.6460352Z         error getting project (68c60c41d444485797b21167): error getting project's
2025-09-14T00:41:24.6461198Z         limits (68c60c41d444485797b21167):
2025-09-14T00:41:24.6462300Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c41d444485797b21167/limits
2025-09-14T00:41:24.6463775Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6464874Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6465613Z         BadRequestDetail: 
2025-09-14T00:41:24.6466201Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (34.49s)
```

- 2025-09-15
  - PASS 2 minutes
  - FAIL 33 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3136222Z === RUN   TestAccNetworkNetworkPeering_timeouts
2025-09-15T06:33:08.3137878Z === CONT  TestAccNetworkNetworkPeering_timeouts
2025-09-15T06:33:08.3155711Z === NAME  TestAccNetworkNetworkPeering_timeouts
2025-09-15T06:33:08.3156469Z     resource_test.go:211: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-15T06:33:08.3157019Z         
2025-09-15T06:33:08.3157457Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3157802Z         
2025-09-15T06:33:08.3158355Z           with mongodbatlas_project.my_project,
2025-09-15T06:33:08.3159095Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-15T06:33:08.3159696Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-15T06:33:08.3160015Z         
2025-09-15T06:33:08.3160480Z         error getting project (68c7b03ed444485797b5c7eb): error getting project's
2025-09-15T06:33:08.3161072Z         limits (68c7b03ed444485797b5c7eb):
2025-09-15T06:33:08.3161671Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03ed444485797b5c7eb/limits
2025-09-15T06:33:08.3162356Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3162947Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3163353Z         BadRequestDetail: 
2025-09-15T06:33:08.3163691Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (33.91s)
```

- 2025-09-16 PASS 2 minutes
- 2025-09-17 PASS 2 minutes
- 2025-09-18 PASS 2 minutes
- 2025-09-19 PASS 2 minutes
- 2025-09-20 PASS 2 minutes
- 2025-09-21 PASS 2 minutes
- 2025-09-22 PASS 2 minutes
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 2 minutes
- 2025-09-25 PASS 2 minutes
- 2025-09-26 PASS 2 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 2 minutes
- 2025-09-29 PASS 2 minutes
- 2025-09-30
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-02 PASS 2 minutes
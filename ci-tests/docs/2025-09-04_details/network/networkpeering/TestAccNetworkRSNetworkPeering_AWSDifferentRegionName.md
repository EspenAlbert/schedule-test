# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:43](#error-2025-08-17t0043360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cff746882a383c7e5c/limits | qa | flaky_500 | 236.05s
[2025-08-20 14:10](#error-2025-08-20t1410520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4875734606989a31cac/limits | qa | flaky_500 | 236.06s
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2c4192cd1cc589c1b8/limits | qa | flaky_500 | 238.08s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07 PASS 5 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 3 minutes
- 2025-08-10 PASS 4 minutes
- 2025-08-11 PASS 3 minutes
- 2025-08-12 PASS 3 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 3 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17

### Error 2025-08-17T00:43:36+00:00
```
2025-08-17T00:43:36.9824282Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-17T00:43:36.9827732Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-17T00:43:36.9877329Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-17T00:43:36.9878053Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:43:36.9878553Z         
2025-08-17T00:43:36.9878954Z         Error: error when getting project properties after create
2025-08-17T00:43:36.9879315Z         
2025-08-17T00:43:36.9879663Z           with mongodbatlas_project.my_project,
2025-08-17T00:43:36.9880319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-08-17T00:43:36.9880930Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-08-17T00:43:36.9881266Z         
2025-08-17T00:43:36.9881741Z         error getting project (68a122cff746882a383c7e5c): error getting project's
2025-08-17T00:43:36.9882223Z         limits (68a122cff746882a383c7e5c):
2025-08-17T00:43:36.9882829Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cff746882a383c7e5c/limits
2025-08-17T00:43:36.9883526Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:43:36.9884133Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:43:36.9884549Z         BadRequestDetail: 
2025-08-17T00:43:36.9897807Z    test_working_directory=/tmp/plugintest1435395733 test_name=TestAccNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9910511Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (236.54s)
```

- 2025-08-18 PASS 3 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 3 minutes
  - FAIL 3 minutes

### Error 2025-08-20T14:10:52+00:00
```
2025-08-20T14:10:52.3875491Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-20T14:10:52.3879725Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-20T14:10:52.3903883Z   
2025-08-20T14:10:52.3904854Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:10:52.3905723Z         
2025-08-20T14:10:52.3906457Z         Error: error when getting project properties after create
2025-08-20T14:10:52.3907065Z         
2025-08-20T14:10:52.3907666Z           with mongodbatlas_project.my_project,
2025-08-20T14:10:52.3908823Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-08-20T14:10:52.3909890Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-08-20T14:10:52.3910626Z         
2025-08-20T14:10:52.3911479Z         error getting project (68a5d4875734606989a31cac): error getting project's
2025-08-20T14:10:52.3912328Z         limits (68a5d4875734606989a31cac):
2025-08-20T14:10:52.3913385Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4875734606989a31cac/limits
2025-08-20T14:10:52.3914610Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:10:52.3915684Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:10:52.3916419Z         BadRequestDetail: 
2025-08-20T14:10:52.3931060Z   
2025-08-20T14:10:52.3946692Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (236.55s)
```

- 2025-08-21 PASS 3 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 3 minutes
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7014679Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-24T00:42:57.7018475Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-24T00:42:57.7148072Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-08-24T00:42:57.7149530Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:42:57.7150415Z         
2025-08-24T00:42:57.7151127Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7151727Z         
2025-08-24T00:42:57.7152326Z           with mongodbatlas_project.my_project,
2025-08-24T00:42:57.7153672Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-08-24T00:42:57.7154787Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-08-24T00:42:57.7155363Z         
2025-08-24T00:42:57.7156221Z         error getting project (68aa5d2c4192cd1cc589c1b8): error getting project's
2025-08-24T00:42:57.7157094Z         limits (68aa5d2c4192cd1cc589c1b8):
2025-08-24T00:42:57.7158187Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2c4192cd1cc589c1b8/limits
2025-08-24T00:42:57.7159445Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7160535Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7161275Z         BadRequestDetail: 
2025-08-24T00:42:57.7163831Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (238.77s)
```

- 2025-08-25 PASS 3 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 3 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 3 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5631501Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-01T00:42:46.5634617Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-01T00:42:46.5682948Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-09-01T00:42:46.5684047Z     resource_network_peering_test.go:180: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:42:46.5684794Z         
2025-09-01T00:42:46.5685534Z         Error: error creating project: test-acc-tf-p-1682565483046016023
2025-09-01T00:42:46.5686154Z         
2025-09-01T00:42:46.5686734Z           with mongodbatlas_project.my_project,
2025-09-01T00:42:46.5688021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-01T00:42:46.5689069Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-01T00:42:46.5689616Z         
2025-09-01T00:42:46.5690471Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5691636Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5692737Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5693833Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5694561Z         BadRequestDetail: 
2025-09-01T00:42:46.5708004Z   
2025-09-01T00:42:46.5765822Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (1.22s)
```

  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 3 minutes
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes
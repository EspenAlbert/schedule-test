# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:41](#error-2025-09-07t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1da8704811492b546ed/limits | qa | flaky_500 | 34.02s
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a70cddbf4f6e4994c4/limits | qa | flaky_500 | 34.05s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c411411d835e95b32b6/limits | qa | flaky_500 | 33.08s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03ed444485797b5c7ec/limits | qa | flaky_500 | 34.04s
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | timeout | 3727.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 2 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 2 minutes
- 2025-09-07

### Error 2025-09-07T00:41:46+00:00
```
2025-09-07T00:41:46.8242645Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-09-07T00:41:46.8254002Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-09-07T00:41:46.8288521Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-09-07T00:41:46.8289555Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:41:46.8290338Z         
2025-09-07T00:41:46.8291047Z         Error: error when getting project properties after create
2025-09-07T00:41:46.8291663Z         
2025-09-07T00:41:46.8292255Z           with mongodbatlas_project.my_project,
2025-09-07T00:41:46.8293446Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-07T00:41:46.8294545Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-07T00:41:46.8295127Z         
2025-09-07T00:41:46.8295969Z         error getting project (68bcd1da8704811492b546ed): error getting project's
2025-09-07T00:41:46.8296821Z         limits (68bcd1da8704811492b546ed):
2025-09-07T00:41:46.8298108Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1da8704811492b546ed/limits
2025-09-07T00:41:46.8299364Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:41:46.8300752Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:41:46.8301517Z         BadRequestDetail: 
2025-09-07T00:41:46.8302107Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (34.16s)
```

- 2025-09-08
  - PASS 2 minutes
  - FAIL 34 seconds

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9818065Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-09-08T09:46:17.9825526Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-09-08T09:46:17.9847110Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-09-08T09:46:17.9847809Z     resource_network_peering_test.go:26: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:46:17.9848269Z         
2025-09-08T09:46:17.9848686Z         Error: error when getting project properties after create
2025-09-08T09:46:17.9849042Z         
2025-09-08T09:46:17.9849396Z           with mongodbatlas_project.my_project,
2025-09-08T09:46:17.9850058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-08T09:46:17.9850674Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-08T09:46:17.9851009Z         
2025-09-08T09:46:17.9851500Z         error getting project (68bea2a70cddbf4f6e4994c4): error getting project's
2025-09-08T09:46:17.9852005Z         limits (68bea2a70cddbf4f6e4994c4):
2025-09-08T09:46:17.9852617Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a70cddbf4f6e4994c4/limits
2025-09-08T09:46:17.9853317Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:17.9854061Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:17.9854492Z         BadRequestDetail: 
2025-09-08T09:46:17.9854955Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (34.45s)
```

  - PASS 2 minutes
- 2025-09-09 PASS 3 minutes
- 2025-09-10 PASS 2 minutes
- 2025-09-11 PASS 3 minutes
- 2025-09-12 PASS 2 minutes
- 2025-09-13 PASS 2 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6327396Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-09-14T00:41:24.6340993Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-09-14T00:41:24.6412930Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-09-14T00:41:24.6414045Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6414726Z         
2025-09-14T00:41:24.6415447Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6416092Z         
2025-09-14T00:41:24.6416722Z           with mongodbatlas_project.my_project,
2025-09-14T00:41:24.6417915Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-14T00:41:24.6419029Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-14T00:41:24.6419599Z         
2025-09-14T00:41:24.6420447Z         error getting project (68c60c411411d835e95b32b6): error getting project's
2025-09-14T00:41:24.6421308Z         limits (68c60c411411d835e95b32b6):
2025-09-14T00:41:24.6422388Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c411411d835e95b32b6/limits
2025-09-14T00:41:24.6423818Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6424923Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6425664Z         BadRequestDetail: 
2025-09-14T00:41:24.6426257Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (33.83s)
```

- 2025-09-15
  - PASS 2 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3130336Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-09-15T06:33:08.3139155Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-09-15T06:33:08.3182200Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-09-15T06:33:08.3182704Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3183088Z         
2025-09-15T06:33:08.3183496Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3183839Z         
2025-09-15T06:33:08.3184174Z           with mongodbatlas_project.my_project,
2025-09-15T06:33:08.3184818Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-09-15T06:33:08.3185546Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-09-15T06:33:08.3185861Z         
2025-09-15T06:33:08.3186323Z         error getting project (68c7b03ed444485797b5c7ec): error getting project's
2025-09-15T06:33:08.3186794Z         limits (68c7b03ed444485797b5c7ec):
2025-09-15T06:33:08.3187381Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03ed444485797b5c7ec/limits
2025-09-15T06:33:08.3188168Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3188765Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3189169Z         BadRequestDetail: 
2025-09-15T06:33:08.3189638Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (34.39s)
```

- 2025-09-16 PASS 3 minutes
- 2025-09-17 PASS 2 minutes
- 2025-09-18 PASS 3 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 2 minutes
- 2025-09-22 PASS 3 minutes
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 2 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 54 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6750691Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6764718Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6805803Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6806324Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-02T01:28:35.6806706Z         
2025-10-02T01:28:35.6807720Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-02T01:28:35.6809319Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-02T01:28:35.6809932Z         
2025-10-02T01:28:35.6810286Z           with mongodbatlas_network_peering.test,
2025-10-02T01:28:35.6810957Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_network_peering" "test":
2025-10-02T01:28:35.6811578Z           23: 	resource "mongodbatlas_network_peering" "test" {
2025-10-02T01:28:35.6811910Z         
2025-10-02T01:28:35.6827916Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (3727.75s)
```

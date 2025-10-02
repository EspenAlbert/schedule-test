# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:41](#error-2025-09-07t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1dc8704811492b54b39/limits | qa | flaky_500 | 200.09s
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a8341d8a49877621fb/limits | qa | flaky_500 | 35.02s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c431411d835e95b37a3/limits | qa | flaky_500 | 36.05s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03fd444485797b5ccf9/limits | qa | flaky_500 | 35.05s
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | timeout | 3729.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 2 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 3 minutes
- 2025-09-07

### Error 2025-09-07T00:41:46+00:00
```
2025-09-07T00:41:46.8241358Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-09-07T00:41:46.8252012Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-09-07T00:41:46.8345702Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-09-07T00:41:46.8347320Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:41:46.8348254Z         
2025-09-07T00:41:46.8348956Z         Error: error when getting project properties after create
2025-09-07T00:41:46.8349563Z         
2025-09-07T00:41:46.8350150Z           with mongodbatlas_project.my_project,
2025-09-07T00:41:46.8351335Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-09-07T00:41:46.8352407Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-09-07T00:41:46.8352973Z         
2025-09-07T00:41:46.8353800Z         error getting project (68bcd1dc8704811492b54b39): error getting project's
2025-09-07T00:41:46.8354651Z         limits (68bcd1dc8704811492b54b39):
2025-09-07T00:41:46.8355720Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1dc8704811492b54b39/limits
2025-09-07T00:41:46.8356963Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:41:46.8358195Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:41:46.8358924Z         BadRequestDetail: 
2025-09-07T00:41:46.8382698Z   
2025-09-07T00:41:46.8396990Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (200.86s)
```

- 2025-09-08
  - PASS 2 minutes
  - FAIL 35 seconds

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9817226Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-09-08T09:46:17.9824087Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-09-08T09:46:17.9863516Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-09-08T09:46:17.9864146Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:46:17.9864612Z         
2025-09-08T09:46:17.9865027Z         Error: error when getting project properties after create
2025-09-08T09:46:17.9865555Z         
2025-09-08T09:46:17.9865914Z           with mongodbatlas_project.my_project,
2025-09-08T09:46:17.9866573Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-09-08T09:46:17.9867186Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-09-08T09:46:17.9867514Z         
2025-09-08T09:46:17.9868059Z         error getting project (68bea2a8341d8a49877621fb): error getting project's
2025-09-08T09:46:17.9868624Z         limits (68bea2a8341d8a49877621fb):
2025-09-08T09:46:17.9869227Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a8341d8a49877621fb/limits
2025-09-08T09:46:17.9869924Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:17.9870528Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:17.9870948Z         BadRequestDetail: 
2025-09-08T09:46:17.9871291Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (35.21s)
```

  - PASS 3 minutes
- 2025-09-09 PASS 3 minutes
- 2025-09-10 PASS 2 minutes
- 2025-09-11 PASS 3 minutes
- 2025-09-12 PASS 3 minutes
- 2025-09-13 PASS 3 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6326138Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-09-14T00:41:24.6337802Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-09-14T00:41:24.6535711Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-09-14T00:41:24.6536400Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6536926Z         
2025-09-14T00:41:24.6537419Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6537845Z         
2025-09-14T00:41:24.6538263Z           with mongodbatlas_project.my_project,
2025-09-14T00:41:24.6539083Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-09-14T00:41:24.6539829Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-09-14T00:41:24.6540229Z         
2025-09-14T00:41:24.6540813Z         error getting project (68c60c431411d835e95b37a3): error getting project's
2025-09-14T00:41:24.6541403Z         limits (68c60c431411d835e95b37a3):
2025-09-14T00:41:24.6542078Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c431411d835e95b37a3/limits
2025-09-14T00:41:24.6542777Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6543637Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6544053Z         BadRequestDetail: 
2025-09-14T00:41:24.6544399Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (36.47s)
```

- 2025-09-15
  - PASS 2 minutes
  - FAIL 35 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3129526Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-09-15T06:33:08.3137021Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-09-15T06:33:08.3251481Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-09-15T06:33:08.3252019Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3252418Z         
2025-09-15T06:33:08.3252816Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3253156Z         
2025-09-15T06:33:08.3253485Z           with mongodbatlas_project.my_project,
2025-09-15T06:33:08.3254126Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-09-15T06:33:08.3254729Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-09-15T06:33:08.3255049Z         
2025-09-15T06:33:08.3255500Z         error getting project (68c7b03fd444485797b5ccf9): error getting project's
2025-09-15T06:33:08.3255973Z         limits (68c7b03fd444485797b5ccf9):
2025-09-15T06:33:08.3256558Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03fd444485797b5ccf9/limits
2025-09-15T06:33:08.3257231Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3257821Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3258477Z         BadRequestDetail: 
2025-09-15T06:33:08.3258818Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (35.46s)
```

- 2025-09-16 PASS 3 minutes
- 2025-09-17 PASS 3 minutes
- 2025-09-18 PASS 3 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 3 minutes
- 2025-09-22 PASS 3 minutes
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 54 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6748896Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6761864Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6819552Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6820399Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-02T01:28:35.6821208Z         
2025-10-02T01:28:35.6823190Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-02T01:28:35.6824941Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-02T01:28:35.6825577Z         
2025-10-02T01:28:35.6825945Z           with mongodbatlas_network_peering.test,
2025-10-02T01:28:35.6826633Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "test":
2025-10-02T01:28:35.6827269Z           25: 	resource "mongodbatlas_network_peering" "test" {
2025-10-02T01:28:35.6827610Z         
2025-10-02T01:28:35.6828579Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (3729.56s)
```

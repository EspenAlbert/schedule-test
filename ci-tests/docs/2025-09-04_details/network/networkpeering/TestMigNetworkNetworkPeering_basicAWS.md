# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:45](#error-2025-08-10t0045300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8c439cf8e2817e3bee5/limits | qa | flaky_500 | 231.06s
[2025-08-17 00:43](#error-2025-08-17t0043360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d0aafa9a76ca8bb1e5/limits | qa | flaky_500 | 200.04s
[2025-08-20 14:10](#error-2025-08-20t1410520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4875734606989a32139/limits | qa | flaky_500 | 208.09s
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2d9bbb8c4ee1f8223e/limits | qa | flaky_500 | 33.08s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 minutes
- 2025-08-07 PASS 6 minutes
- 2025-08-08 PASS 2 minutes
- 2025-08-09 PASS 2 minutes
- 2025-08-10

### Error 2025-08-10T00:45:30+00:00
```
2025-08-10T00:45:30.7790536Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-08-10T00:45:30.7813410Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-08-10T00:45:30.7827481Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-08-10T00:45:30.7828191Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-10T00:45:30.7828711Z         
2025-08-10T00:45:30.7829114Z         Error: error when getting project properties after create
2025-08-10T00:45:30.7829463Z         
2025-08-10T00:45:30.7829806Z           with mongodbatlas_project.my_project,
2025-08-10T00:45:30.7830463Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-08-10T00:45:30.7831057Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-08-10T00:45:30.7831379Z         
2025-08-10T00:45:30.7831840Z         error getting project (6897e8c439cf8e2817e3bee5): error getting project's
2025-08-10T00:45:30.7832321Z         limits (6897e8c439cf8e2817e3bee5):
2025-08-10T00:45:30.7832909Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8c439cf8e2817e3bee5/limits
2025-08-10T00:45:30.7833789Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T00:45:30.7834397Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T00:45:30.7834804Z         BadRequestDetail: 
2025-08-10T00:45:30.7836074Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (231.63s)
```

- 2025-08-11 PASS 3 minutes
- 2025-08-12 PASS 3 minutes
- 2025-08-13 PASS 2 minutes
- 2025-08-14 PASS 3 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17

### Error 2025-08-17T00:43:36+00:00
```
2025-08-17T00:43:36.9814116Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9825952Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9855423Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-08-17T00:43:36.9856124Z     resource_network_peering_migration_test.go:11: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-17T00:43:36.9856875Z         
2025-08-17T00:43:36.9857361Z         Error: error when getting project properties after create
2025-08-17T00:43:36.9857733Z         
2025-08-17T00:43:36.9858089Z           with mongodbatlas_project.my_project,
2025-08-17T00:43:36.9858764Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-08-17T00:43:36.9859381Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-08-17T00:43:36.9859732Z         
2025-08-17T00:43:36.9860219Z         error getting project (68a122d0aafa9a76ca8bb1e5): error getting project's
2025-08-17T00:43:36.9860722Z         limits (68a122d0aafa9a76ca8bb1e5):
2025-08-17T00:43:36.9861346Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d0aafa9a76ca8bb1e5/limits
2025-08-17T00:43:36.9862058Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:43:36.9862672Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:43:36.9863099Z         BadRequestDetail: 
2025-08-17T00:43:36.9876312Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName test_terraform_path=/home/runner/work/_temp/6574f137-0806-4105-b881-3ae7069681bc/terraform
2025-08-17T00:43:36.9909573Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (200.40s)
```

- 2025-08-18 PASS 3 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 3 minutes
  - FAIL 3 minutes

### Error 2025-08-20T14:10:52+00:00
```
2025-08-20T14:10:52.3866448Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-08-20T14:10:52.3877036Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-08-20T14:10:52.3931502Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-08-20T14:10:52.3932740Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:10:52.3933666Z         
2025-08-20T14:10:52.3934373Z         Error: error when getting project properties after create
2025-08-20T14:10:52.3934980Z         
2025-08-20T14:10:52.3935578Z           with mongodbatlas_project.my_project,
2025-08-20T14:10:52.3936734Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-08-20T14:10:52.3937983Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-08-20T14:10:52.3938561Z         
2025-08-20T14:10:52.3939387Z         error getting project (68a5d4875734606989a32139): error getting project's
2025-08-20T14:10:52.3940388Z         limits (68a5d4875734606989a32139):
2025-08-20T14:10:52.3941468Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4875734606989a32139/limits
2025-08-20T14:10:52.3942727Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:10:52.3943797Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:10:52.3944528Z         BadRequestDetail: 
2025-08-20T14:10:52.3945852Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (208.89s)
```

- 2025-08-21 PASS 2 minutes
- 2025-08-22 PASS 2 minutes
- 2025-08-23 PASS 3 minutes
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7005645Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-08-24T00:42:57.7016253Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-08-24T00:42:57.7043730Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-08-24T00:42:57.7044900Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:57.7045719Z         
2025-08-24T00:42:57.7046442Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7047055Z         
2025-08-24T00:42:57.7047650Z           with mongodbatlas_project.my_project,
2025-08-24T00:42:57.7048836Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-08-24T00:42:57.7049928Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-08-24T00:42:57.7050496Z         
2025-08-24T00:42:57.7051346Z         error getting project (68aa5d2d9bbb8c4ee1f8223e): error getting project's
2025-08-24T00:42:57.7052217Z         limits (68aa5d2d9bbb8c4ee1f8223e):
2025-08-24T00:42:57.7053482Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2d9bbb8c4ee1f8223e/limits
2025-08-24T00:42:57.7054744Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7055822Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7056552Z         BadRequestDetail: 
2025-08-24T00:42:57.7057143Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (33.76s)
```

- 2025-08-25 PASS 3 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 2 minutes
- 2025-08-28 PASS 2 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 2 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5573747Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-09-01T00:42:46.5633001Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-09-01T00:42:46.5775442Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-09-01T00:42:46.5776047Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5776691Z         
2025-09-01T00:42:46.5777374Z         Error: error creating project: test-acc-tf-p-2995942377788158132
2025-09-01T00:42:46.5777749Z         
2025-09-01T00:42:46.5778084Z           with mongodbatlas_project.my_project,
2025-09-01T00:42:46.5778732Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-09-01T00:42:46.5779326Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-09-01T00:42:46.5779643Z         
2025-09-01T00:42:46.5780130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5780783Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5781406Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5782017Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5782436Z         BadRequestDetail: 
2025-09-01T00:42:46.5782772Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (3.05s)
```

  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-09-02 PASS 3 minutes
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 2 minutes
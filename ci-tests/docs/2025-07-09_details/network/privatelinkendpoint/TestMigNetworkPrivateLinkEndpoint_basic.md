# network/privatelinkendpoint/TestMigNetworkPrivateLinkEndpoint_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 110) FAIL(x 3)
Success rate: 97.35%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 4.03s
2025-06-05 00:54 | dev | 4.03s
2025-06-29 00:44 | qa | 255.08s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 3 minutes
### 2025-04-12
#### PASS 3 minutes
### 2025-04-13
#### PASS 3 minutes
### 2025-04-14
#### PASS 3 minutes
### 2025-04-15
#### PASS 3 minutes
### 2025-04-16
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-04-17
#### PASS 3 minutes
### 2025-04-18
#### PASS 3 minutes
### 2025-04-19
#### PASS 3 minutes
### 2025-04-20
#### PASS 3 minutes
### 2025-04-21
#### PASS 3 minutes
### 2025-04-22
#### PASS 3 minutes
### 2025-04-23
#### PASS 3 minutes
### 2025-04-24
#### PASS 3 minutes
### 2025-04-25
#### PASS 3 minutes
### 2025-04-26
#### PASS 3 minutes
### 2025-04-27
#### PASS 3 minutes
### 2025-04-28
#### PASS 3 minutes
### 2025-04-29
#### PASS 3 minutes
### 2025-04-30
#### PASS 4 minutes
#### PASS 3 minutes
### 2025-05-01
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-02
#### PASS 3 minutes
### 2025-05-03
#### PASS 3 minutes
### 2025-05-04
#### PASS 3 minutes
### 2025-05-05
#### PASS 3 minutes
### 2025-05-06
#### PASS 3 minutes
### 2025-05-07
#### PASS 3 minutes
### 2025-05-08
#### PASS 3 minutes
### 2025-05-09
#### PASS 3 minutes
### 2025-05-10
#### PASS 3 minutes
### 2025-05-11
#### FAIL 4 seconds
```
2025-05-11T00:29:57.8843553Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-05-11T00:29:57.8846942Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-05-11T00:29:57.8922826Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-05-11T00:29:57.8923489Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8923997Z         
2025-05-11T00:29:57.8924445Z         Error: error creating project: test-acc-tf-p-723710274358711909
2025-05-11T00:29:57.8924835Z         
2025-05-11T00:29:57.8925176Z           with mongodbatlas_project.test,
2025-05-11T00:29:57.8925804Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:57.8926505Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:57.8926839Z         
2025-05-11T00:29:57.8927337Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8927776Z         type
2025-05-11T00:29:57.8928110Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (4.33s)
```
### 2025-05-12
#### PASS 3 minutes
### 2025-05-13
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-14
#### PASS 5 minutes
### 2025-05-15
#### PASS 3 minutes
### 2025-05-16
#### PASS 3 minutes
### 2025-05-17
#### PASS 3 minutes
### 2025-05-18
#### PASS 3 minutes
### 2025-05-19
#### PASS 3 minutes
### 2025-05-20
#### PASS 3 minutes
### 2025-05-21
#### PASS 3 minutes
### 2025-05-22
#### PASS 3 minutes
### 2025-05-23
#### PASS 3 minutes
### 2025-05-24
#### PASS 3 minutes
### 2025-05-25
#### PASS 3 minutes
### 2025-05-26
#### PASS 3 minutes
### 2025-05-27
#### PASS 3 minutes
### 2025-05-28
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-29
#### PASS 3 minutes
### 2025-05-30
#### PASS 3 minutes
### 2025-05-31
#### PASS 3 minutes
### 2025-06-01
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 4 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-06-02
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-06-03
#### PASS 3 minutes
### 2025-06-04
#### PASS 3 minutes
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:54:09.2606633Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-06-05T00:54:09.2610042Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-06-05T00:54:09.2653518Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-06-05T00:54:09.2654177Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2654813Z         
2025-06-05T00:54:09.2655259Z         Error: error creating project: test-acc-tf-p-2586240252928974334
2025-06-05T00:54:09.2655814Z         
2025-06-05T00:54:09.2656136Z           with mongodbatlas_project.test,
2025-06-05T00:54:09.2656751Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:54:09.2657322Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:54:09.2657643Z         
2025-06-05T00:54:09.2658128Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2658777Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2659370Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2659826Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (4.33s)
```
### 2025-06-06
#### PASS 5 minutes
### 2025-06-07
#### PASS 3 minutes
### 2025-06-08
#### PASS 3 minutes
### 2025-06-09
#### PASS 3 minutes
### 2025-06-10
#### PASS 3 minutes
### 2025-06-11
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-06-12
#### PASS 4 minutes
### 2025-06-13
#### PASS 4 minutes
### 2025-06-14
#### PASS 4 minutes
### 2025-06-15
#### PASS 4 minutes
### 2025-06-16
#### PASS 3 minutes
### 2025-06-17
#### PASS 4 minutes
### 2025-06-18
#### PASS 3 minutes
### 2025-06-19
#### PASS 3 minutes
### 2025-06-20
#### PASS 3 minutes
### 2025-06-21
#### PASS 3 minutes
### 2025-06-22
#### PASS 3 minutes
### 2025-06-23
#### PASS 3 minutes
### 2025-06-24
#### PASS 3 minutes
### 2025-06-25
#### PASS 3 minutes
### 2025-06-26
#### PASS 3 minutes
### 2025-06-27
#### PASS 3 minutes
### 2025-06-28
#### PASS 3 minutes
### 2025-06-29
#### FAIL 4 minutes
```
2025-06-29T00:44:25.8137278Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-06-29T00:44:25.8141174Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-06-29T00:44:25.8196199Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-06-29T00:44:25.8196935Z     resource_privatelink_endpoint_migration_test.go:22: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-06-29T00:44:25.8197456Z         
2025-06-29T00:44:25.8197864Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8198209Z         
2025-06-29T00:44:25.8198513Z           with mongodbatlas_project.test,
2025-06-29T00:44:25.8199123Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:44:25.8199689Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:44:25.8199990Z         
2025-06-29T00:44:25.8200542Z         error getting project (6860898556291349dce6c809): error getting project's
2025-06-29T00:44:25.8201008Z         limits (6860898556291349dce6c809):
2025-06-29T00:44:25.8201592Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898556291349dce6c809/limits
2025-06-29T00:44:25.8202273Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8202864Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8203281Z         BadRequestDetail: 
2025-06-29T00:44:25.8204383Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (255.83s)
```
### 2025-06-30
#### PASS 3 minutes
### 2025-07-01
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 4 minutes
### 2025-07-02
#### PASS 3 minutes
### 2025-07-03
#### PASS 3 minutes
### 2025-07-04
#### PASS 3 minutes
### 2025-07-05
#### PASS 4 minutes
### 2025-07-06
#### PASS 3 minutes
### 2025-07-07
#### PASS 3 minutes
### 2025-07-08
#### PASS 3 minutes
### 2025-07-09
#### PASS 3 minutes
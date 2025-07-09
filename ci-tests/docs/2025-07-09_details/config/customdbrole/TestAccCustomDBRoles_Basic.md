# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 100 TestRuns in dev, qa from 2025-04-25 to 2025-07-09 from master branch: 1 unique tests, PASS(x 86) FAIL(x 14)
Success rate: 86.00%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-27 00:31 | qa | 16.08s
2025-04-30 09:06 | qa | 14.01s
2025-05-04 00:32 | qa | 13.01s
2025-05-11 00:29 | qa | 0.00s
2025-05-18 00:31 | qa | 14.04s
2025-05-25 00:32 | qa | 14.09s
2025-05-28 08:38 | qa | 14.09s
2025-05-28 12:23 | qa | 14.06s
2025-06-08 00:33 | qa | 14.04s
2025-06-11 07:39 | qa | 15.01s
2025-06-15 00:33 | qa | 14.02s
2025-06-22 00:33 | qa | 13.10s
2025-06-29 00:34 | qa | 14.04s
2025-07-06 00:33 | qa | 14.03s

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
2025-04-11: MISSING
2025-04-12: MISSING
2025-04-13: MISSING
2025-04-14: MISSING
2025-04-15: MISSING
2025-04-16: MISSING
2025-04-17: MISSING
2025-04-18: MISSING
2025-04-19: MISSING
2025-04-20: MISSING
2025-04-21: MISSING
2025-04-22: MISSING
2025-04-23: MISSING
2025-04-24: MISSING
### 2025-04-25
#### PASS 17 seconds
### 2025-04-26
#### PASS 17 seconds
### 2025-04-27
#### FAIL 16 seconds
```
2025-04-27T00:31:28.5275214Z === RUN   TestAccCustomDBRoles_Basic
2025-04-27T00:31:28.5282876Z === CONT  TestAccCustomDBRoles_Basic
2025-04-27T00:31:28.5302747Z   
2025-04-27T00:31:28.5303450Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-04-27T00:31:28.5304106Z         
2025-04-27T00:31:28.5307553Z         Error: error updating custom db role (test-acc-tf-210072311966803524): https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a6af71e7361cf744d88/customDBRoles/roles/test-acc-tf-210072311966803524 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-04-27T00:31:28.5309916Z         
2025-04-27T00:31:28.5310433Z           with mongodbatlas_custom_db_role.test,
2025-04-27T00:31:28.5311473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-04-27T00:31:28.5312436Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-04-27T00:31:28.5312930Z         
2025-04-27T00:31:28.5313292Z --- FAIL: TestAccCustomDBRoles_Basic (16.81s)
```
### 2025-04-28
#### PASS 18 seconds
### 2025-04-29
#### PASS 16 seconds
### 2025-04-30
#### PASS 14 seconds
#### FAIL 14 seconds
```
2025-04-30T09:06:09.9111717Z === RUN   TestAccCustomDBRoles_Basic
2025-04-30T09:06:09.9120435Z === CONT  TestAccCustomDBRoles_Basic
2025-04-30T09:06:09.9145424Z   
2025-04-30T09:06:09.9146234Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-04-30T09:06:09.9146967Z         
2025-04-30T09:06:09.9150738Z         Error: error updating custom db role (test-acc-tf-1828875070232285301): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6811e78cbf1b7a1a8c50e2ae/customDBRoles/roles/test-acc-tf-1828875070232285301 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-04-30T09:06:09.9153161Z         
2025-04-30T09:06:09.9153780Z           with mongodbatlas_custom_db_role.test,
2025-04-30T09:06:09.9160002Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-04-30T09:06:09.9161422Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-04-30T09:06:09.9161996Z         
2025-04-30T09:06:09.9162420Z --- FAIL: TestAccCustomDBRoles_Basic (14.12s)
```
### 2025-05-01
#### PASS 16 seconds
#### PASS 19 seconds
#### PASS 13 seconds
#### PASS 17 seconds
#### PASS 16 seconds
#### PASS 19 seconds
#### PASS 17 seconds
### 2025-05-02
#### PASS 17 seconds
### 2025-05-03
#### PASS 16 seconds
### 2025-05-04
#### FAIL 13 seconds
```
2025-05-04T00:32:47.0936773Z === RUN   TestAccCustomDBRoles_Basic
2025-05-04T00:32:47.0944669Z === CONT  TestAccCustomDBRoles_Basic
2025-05-04T00:32:47.0965260Z    test_terraform_path=/home/runner/work/_temp/3dd02c26-53bc-43d9-b4d7-b86d44472c32/terraform test_working_directory=/tmp/plugintest1665107542 test_step_number=3 test_name=TestAccCustomDBRoles_Basic
2025-05-04T00:32:47.0967151Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-04T00:32:47.0967865Z         
2025-05-04T00:32:47.0971585Z         Error: error updating custom db role (test-acc-tf-3321232955591931422): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6816b53d5763026acc287d28/customDBRoles/roles/test-acc-tf-3321232955591931422 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-04T00:32:47.0974024Z         
2025-05-04T00:32:47.0974667Z           with mongodbatlas_custom_db_role.test,
2025-05-04T00:32:47.0975820Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-04T00:32:47.0977030Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-04T00:32:47.0977594Z         
2025-05-04T00:32:47.0978029Z --- FAIL: TestAccCustomDBRoles_Basic (13.11s)
```
### 2025-05-05
#### PASS 19 seconds
### 2025-05-06
#### PASS 13 seconds
### 2025-05-07
#### PASS 16 seconds
### 2025-05-08
#### PASS 16 seconds
### 2025-05-09
#### PASS 19 seconds
### 2025-05-10
#### PASS 16 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:47.3822260Z === RUN   TestAccCustomDBRoles_Basic
2025-05-11T00:29:47.3823269Z     resource_custom_db_role_test.go:38: Creating execution project: test-acc-tf-p-6290254592611609366
2025-05-11T00:29:47.3824198Z     resource_custom_db_role_test.go:38: 
2025-05-11T00:29:47.3825861Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:47.3829066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:47.3832792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_custom_db_role_test.go:44
2025-05-11T00:29:47.3836626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_custom_db_role_test.go:38
2025-05-11T00:29:47.3838117Z         	Error:      	Received unexpected error:
2025-05-11T00:29:47.3839712Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.3840668Z         	Test:       	TestAccCustomDBRoles_Basic
2025-05-11T00:29:47.3842656Z         	Messages:   	Project creation failed: test-acc-tf-p-6290254592611609366, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:47.3843891Z --- FAIL: TestAccCustomDBRoles_Basic (0.01s)
```
### 2025-05-12
#### PASS 14 seconds
### 2025-05-13
#### PASS 19 seconds
#### PASS 14 seconds
### 2025-05-14
#### PASS 14 seconds
### 2025-05-15
#### PASS 16 seconds
### 2025-05-16
#### PASS 17 seconds
### 2025-05-17
#### PASS 15 seconds
### 2025-05-18
#### FAIL 14 seconds
```
2025-05-18T00:31:58.0902018Z === RUN   TestAccCustomDBRoles_Basic
2025-05-18T00:31:58.0910736Z === CONT  TestAccCustomDBRoles_Basic
2025-05-18T00:31:58.0932858Z    test_terraform_path=/home/runner/work/_temp/aebf3c15-e182-4f23-a50a-f01f924448af/terraform test_step_number=3 test_working_directory=/tmp/plugintest1461436806 test_name=TestAccCustomDBRoles_Basic
2025-05-18T00:31:58.0934908Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-18T00:31:58.0935694Z         
2025-05-18T00:31:58.0940106Z         Error: error updating custom db role (test-acc-tf-1582746887217982773): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68292a0e29733705b2ec8f55/customDBRoles/roles/test-acc-tf-1582746887217982773 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-18T00:31:58.0943406Z         
2025-05-18T00:31:58.0944025Z           with mongodbatlas_custom_db_role.test,
2025-05-18T00:31:58.0945253Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-18T00:31:58.0946338Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-18T00:31:58.0946896Z         
2025-05-18T00:31:58.0947308Z --- FAIL: TestAccCustomDBRoles_Basic (14.45s)
```
### 2025-05-19
#### PASS 16 seconds
### 2025-05-20
#### PASS 15 seconds
### 2025-05-21
#### PASS 15 seconds
### 2025-05-22
#### PASS 13 seconds
### 2025-05-23
#### PASS 16 seconds
### 2025-05-24
#### PASS 17 seconds
### 2025-05-25
#### FAIL 14 seconds
```
2025-05-25T00:32:55.4510206Z === RUN   TestAccCustomDBRoles_Basic
2025-05-25T00:32:55.4559740Z === CONT  TestAccCustomDBRoles_Basic
2025-05-25T00:32:55.4580804Z    test_working_directory=/tmp/plugintest3146806242 test_step_number=3 test_name=TestAccCustomDBRoles_Basic test_terraform_path=/home/runner/work/_temp/cd43af5c-0c16-4417-a16e-1ad6422f48a2/terraform
2025-05-25T00:32:55.4582697Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-25T00:32:55.4583438Z         
2025-05-25T00:32:55.4587247Z         Error: error updating custom db role (test-acc-tf-3055635364303628177): https://cloud-qa.mongodb.com/api/atlas/v2/groups/683264c9f761711183aa492e/customDBRoles/roles/test-acc-tf-3055635364303628177 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-25T00:32:55.4589859Z         
2025-05-25T00:32:55.4590427Z           with mongodbatlas_custom_db_role.test,
2025-05-25T00:32:55.4591566Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-25T00:32:55.4592591Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-25T00:32:55.4593120Z         
2025-05-25T00:32:55.4593507Z --- FAIL: TestAccCustomDBRoles_Basic (14.87s)
```
### 2025-05-26
#### PASS 16 seconds
### 2025-05-27
#### PASS 17 seconds
### 2025-05-28
#### PASS 18 seconds
#### FAIL 14 seconds
```
2025-05-28T08:38:43.8027445Z === RUN   TestAccCustomDBRoles_Basic
2025-05-28T08:38:43.8036561Z === CONT  TestAccCustomDBRoles_Basic
2025-05-28T08:38:43.8057782Z   
2025-05-28T08:38:43.8058580Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-28T08:38:43.8059296Z         
2025-05-28T08:38:43.8062639Z         Error: error updating custom db role (test-acc-tf-15564076020725148): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836cb23e6404f5026ceee59/customDBRoles/roles/test-acc-tf-15564076020725148 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-28T08:38:43.8064877Z         
2025-05-28T08:38:43.8065425Z           with mongodbatlas_custom_db_role.test,
2025-05-28T08:38:43.8066465Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-28T08:38:43.8067426Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-28T08:38:43.8067934Z         
2025-05-28T08:38:43.8068330Z --- FAIL: TestAccCustomDBRoles_Basic (14.94s)
```
#### FAIL 14 seconds
```
2025-05-28T12:23:27.4791128Z === RUN   TestAccCustomDBRoles_Basic
2025-05-28T12:23:27.4799603Z === CONT  TestAccCustomDBRoles_Basic
2025-05-28T12:23:27.4820102Z    test_working_directory=/tmp/plugintest2912086261 test_name=TestAccCustomDBRoles_Basic test_step_number=3 test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform
2025-05-28T12:23:27.4821974Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-05-28T12:23:27.4822732Z         
2025-05-28T12:23:27.4826262Z         Error: error updating custom db role (test-acc-tf-1588494206757313605): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836ffd203b2ee7db737c57f/customDBRoles/roles/test-acc-tf-1588494206757313605 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-28T12:23:27.4828976Z         
2025-05-28T12:23:27.4829542Z           with mongodbatlas_custom_db_role.test,
2025-05-28T12:23:27.4830674Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-05-28T12:23:27.4831721Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-05-28T12:23:27.4832264Z         
2025-05-28T12:23:27.4832671Z --- FAIL: TestAccCustomDBRoles_Basic (14.62s)
```
### 2025-05-29
#### PASS 16 seconds
### 2025-05-30
#### PASS 17 seconds
### 2025-05-31
#### PASS 18 seconds
### 2025-06-01
#### PASS 16 seconds
#### PASS 16 seconds
#### PASS 17 seconds
#### PASS 18 seconds
#### PASS 18 seconds
#### PASS 17 seconds
### 2025-06-02
#### PASS 16 seconds
#### PASS 16 seconds
#### PASS 20 seconds
### 2025-06-03
#### PASS 17 seconds
### 2025-06-04
#### PASS 18 seconds
### 2025-06-05
#### PASS 20 seconds
### 2025-06-06
#### PASS 15 seconds
### 2025-06-07
#### PASS 20 seconds
### 2025-06-08
#### FAIL 14 seconds
```
2025-06-08T00:33:53.1013595Z === RUN   TestAccCustomDBRoles_Basic
2025-06-08T00:33:53.1021271Z === CONT  TestAccCustomDBRoles_Basic
2025-06-08T00:33:53.1044810Z === NAME  TestAccCustomDBRoles_Basic
2025-06-08T00:33:53.1045807Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-08T00:33:53.1046559Z         
2025-06-08T00:33:53.1050108Z         Error: error updating custom db role (test-acc-tf-137501554073088077): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6844da0369401b3bb3c36306/customDBRoles/roles/test-acc-tf-137501554073088077 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-08T00:33:53.1052722Z         
2025-06-08T00:33:53.1053348Z           with mongodbatlas_custom_db_role.test,
2025-06-08T00:33:53.1054513Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-08T00:33:53.1055596Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-08T00:33:53.1056177Z         
2025-06-08T00:33:53.1056611Z --- FAIL: TestAccCustomDBRoles_Basic (14.38s)
```
### 2025-06-09
#### PASS 16 seconds
### 2025-06-10
#### PASS 19 seconds
### 2025-06-11
#### PASS 19 seconds
#### FAIL 15 seconds
```
2025-06-11T07:39:05.1032826Z === RUN   TestAccCustomDBRoles_Basic
2025-06-11T07:39:05.1038128Z === CONT  TestAccCustomDBRoles_Basic
2025-06-11T07:39:05.1060376Z   
2025-06-11T07:39:05.1061191Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-11T07:39:05.1061890Z         
2025-06-11T07:39:05.1065692Z         Error: error updating custom db role (test-acc-tf-1118780511067478474): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6849322671e0a97458c8a26e/customDBRoles/roles/test-acc-tf-1118780511067478474 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-11T07:39:05.1068112Z         
2025-06-11T07:39:05.1068697Z           with mongodbatlas_custom_db_role.test,
2025-06-11T07:39:05.1069836Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-11T07:39:05.1070905Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-11T07:39:05.1071458Z         
2025-06-11T07:39:05.1071856Z --- FAIL: TestAccCustomDBRoles_Basic (15.05s)
```
### 2025-06-12
#### PASS 16 seconds
### 2025-06-13
#### PASS 17 seconds
### 2025-06-14
#### PASS 17 seconds
### 2025-06-15
#### FAIL 14 seconds
```
2025-06-15T00:33:43.1276964Z === RUN   TestAccCustomDBRoles_Basic
2025-06-15T00:33:43.1286322Z === CONT  TestAccCustomDBRoles_Basic
2025-06-15T00:33:43.1311322Z   
2025-06-15T00:33:43.1312127Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-15T00:33:43.1312976Z         
2025-06-15T00:33:43.1316466Z         Error: error updating custom db role (test-acc-tf-2333015541836405900): https://cloud-qa.mongodb.com/api/atlas/v2/groups/684e147a83e3896e131ad1bb/customDBRoles/roles/test-acc-tf-2333015541836405900 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-15T00:33:43.1319026Z         
2025-06-15T00:33:43.1319621Z           with mongodbatlas_custom_db_role.test,
2025-06-15T00:33:43.1320801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-15T00:33:43.1321844Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-15T00:33:43.1322382Z         
2025-06-15T00:33:43.1322768Z --- FAIL: TestAccCustomDBRoles_Basic (14.20s)
```
### 2025-06-16
#### PASS 19 seconds
### 2025-06-17
#### PASS 19 seconds
### 2025-06-18
#### PASS 16 seconds
#### PASS 17 seconds
### 2025-06-19
#### PASS 16 seconds
### 2025-06-20
#### PASS 19 seconds
### 2025-06-21
#### PASS 17 seconds
### 2025-06-22
#### FAIL 13 seconds
```
2025-06-22T00:33:39.3547901Z === RUN   TestAccCustomDBRoles_Basic
2025-06-22T00:33:39.3556642Z === CONT  TestAccCustomDBRoles_Basic
2025-06-22T00:33:39.3579668Z   
2025-06-22T00:33:39.3580461Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-22T00:33:39.3581537Z         
2025-06-22T00:33:39.3585207Z         Error: error updating custom db role (test-acc-tf-5302981608677911054): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eedab82446d9bfb0630/customDBRoles/roles/test-acc-tf-5302981608677911054 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-22T00:33:39.3587934Z         
2025-06-22T00:33:39.3588766Z           with mongodbatlas_custom_db_role.test,
2025-06-22T00:33:39.3590332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-22T00:33:39.3591736Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-22T00:33:39.3592306Z         
2025-06-22T00:33:39.3592732Z --- FAIL: TestAccCustomDBRoles_Basic (13.99s)
```
### 2025-06-23
#### PASS 20 seconds
### 2025-06-24
#### PASS 16 seconds
### 2025-06-25
#### PASS 17 seconds
### 2025-06-26
#### PASS 16 seconds
### 2025-06-27
#### PASS 19 seconds
### 2025-06-28
#### PASS 16 seconds
### 2025-06-29
#### FAIL 14 seconds
```
2025-06-29T00:34:19.1544723Z === RUN   TestAccCustomDBRoles_Basic
2025-06-29T00:34:19.1548752Z === CONT  TestAccCustomDBRoles_Basic
2025-06-29T00:34:19.1561384Z === NAME  TestAccCustomDBRoles_Basic
2025-06-29T00:34:19.1561894Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-06-29T00:34:19.1562290Z         
2025-06-29T00:34:19.1564165Z         Error: error updating custom db role (test-acc-tf-7274438424327129394): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898949709c3a5a3c8b83/customDBRoles/roles/test-acc-tf-7274438424327129394 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-29T00:34:19.1565440Z         
2025-06-29T00:34:19.1565765Z           with mongodbatlas_custom_db_role.test,
2025-06-29T00:34:19.1566396Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-06-29T00:34:19.1566977Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-06-29T00:34:19.1567284Z         
2025-06-29T00:34:19.1567514Z --- FAIL: TestAccCustomDBRoles_Basic (14.42s)
```
### 2025-06-30
#### PASS 17 seconds
### 2025-07-01
#### PASS 16 seconds
#### PASS 17 seconds
#### PASS 19 seconds
#### PASS 17 seconds
#### PASS 20 seconds
#### PASS 16 seconds
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 18 seconds
### 2025-07-04
#### PASS 17 seconds
### 2025-07-05
#### PASS 20 seconds
### 2025-07-06
#### FAIL 14 seconds
```
2025-07-06T00:33:17.8235020Z === RUN   TestAccCustomDBRoles_Basic
2025-07-06T00:33:17.8317253Z === CONT  TestAccCustomDBRoles_Basic
2025-07-06T00:33:17.8344298Z   
2025-07-06T00:33:17.8345487Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-06T00:33:17.8346342Z         
2025-07-06T00:33:17.8351144Z         Error: error updating custom db role (test-acc-tf-6296991448303463705): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3ff690ae45e168bcbce/customDBRoles/roles/test-acc-tf-6296991448303463705 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-06T00:33:17.8354112Z         
2025-07-06T00:33:17.8354971Z           with mongodbatlas_custom_db_role.test,
2025-07-06T00:33:17.8357784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-06T00:33:17.8359423Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-06T00:33:17.8360223Z         
2025-07-06T00:33:17.8360642Z --- FAIL: TestAccCustomDBRoles_Basic (14.27s)
```
### 2025-07-07
#### PASS 16 seconds
### 2025-07-08
#### PASS 19 seconds
### 2025-07-09
#### PASS 20 seconds
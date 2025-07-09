# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 112 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 109) FAIL(x 3)
Success rate: 97.32%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-04 00:29 | dev | 11618.01s
2025-06-05 00:28 | dev | 181.04s

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
#### PASS 31 minutes
### 2025-04-12
#### PASS 32 minutes
### 2025-04-13
#### PASS 38 minutes
### 2025-04-14
#### PASS 31 minutes
### 2025-04-15
#### PASS 34 minutes
### 2025-04-16
#### PASS 31 minutes
#### PASS 40 minutes
### 2025-04-17
#### PASS 34 minutes
### 2025-04-18
#### PASS 33 minutes
### 2025-04-19
#### PASS 36 minutes
### 2025-04-20
#### PASS 35 minutes
### 2025-04-21
#### PASS 31 minutes
### 2025-04-22
#### PASS 34 minutes
### 2025-04-23
#### PASS 35 minutes
### 2025-04-24
#### PASS 36 minutes
### 2025-04-25
#### PASS 33 minutes
### 2025-04-26
#### PASS 36 minutes
### 2025-04-27
#### PASS 35 minutes
### 2025-04-28
#### PASS 30 minutes
### 2025-04-29
#### PASS 34 minutes
### 2025-04-30
#### PASS 35 minutes
### 2025-05-01
#### PASS 32 minutes
#### PASS 31 minutes
#### PASS 35 minutes
#### PASS 31 minutes
#### PASS 31 minutes
#### PASS 34 minutes
#### PASS 29 minutes
### 2025-05-02
#### PASS 37 minutes
### 2025-05-03
#### PASS 35 minutes
### 2025-05-04
#### PASS 30 minutes
### 2025-05-05
#### PASS 31 minutes
### 2025-05-06
#### PASS 35 minutes
### 2025-05-07
#### PASS 35 minutes
### 2025-05-08
#### PASS 36 minutes
### 2025-05-09
#### PASS 37 minutes
### 2025-05-10
#### PASS 32 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:52.8072077Z === RUN   TestAccSearchDeployment_basic
2025-05-11T00:29:52.8148819Z     shared_resource.go:84: 
2025-05-11T00:29:52.8150474Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:52.8153165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:52.8155357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:52.8157529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:52.8159810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:21
2025-05-11T00:29:52.8161083Z         	Error:      	Received unexpected error:
2025-05-11T00:29:52.8162201Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8162770Z         	Test:       	TestAccSearchDeployment_basic
2025-05-11T00:29:52.8163763Z         	Messages:   	Project creation failed: test-acc-tf-p-1015864190017996960, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8164620Z --- FAIL: TestAccSearchDeployment_basic (0.01s)
```
### 2025-05-12
#### PASS 31 minutes
### 2025-05-13
#### PASS 32 minutes
#### PASS 31 minutes
### 2025-05-14
#### PASS 35 minutes
### 2025-05-15
#### PASS 31 minutes
### 2025-05-16
#### PASS 32 minutes
### 2025-05-17
#### PASS 29 minutes
### 2025-05-18
#### PASS 34 minutes
### 2025-05-19
#### PASS 34 minutes
### 2025-05-20
#### PASS 35 minutes
### 2025-05-21
#### PASS 30 minutes
### 2025-05-22
#### PASS 33 minutes
### 2025-05-23
#### PASS 33 minutes
### 2025-05-24
#### PASS 32 minutes
### 2025-05-25
#### PASS 34 minutes
### 2025-05-26
#### PASS 35 minutes
### 2025-05-27
#### PASS 31 minutes
### 2025-05-28
#### PASS 49 minutes
#### PASS 31 minutes
### 2025-05-29
#### PASS 33 minutes
### 2025-05-30
#### PASS 29 minutes
### 2025-05-31
#### PASS 30 minutes
### 2025-06-01
#### PASS 31 minutes
#### PASS 29 minutes
#### PASS 29 minutes
#### PASS 32 minutes
#### PASS 28 minutes
#### PASS 29 minutes
### 2025-06-02
#### PASS 31 minutes
#### PASS 33 minutes
#### PASS 31 minutes
### 2025-06-03
#### PASS 32 minutes
### 2025-06-04
#### FAIL 3 hours
```
2025-06-04T00:29:16.4977394Z === RUN   TestAccSearchDeployment_basic
2025-06-04T00:29:19.7153493Z === CONT  TestAccSearchDeployment_basic
2025-06-04T03:38:04.2840796Z === NAME  TestAccSearchDeployment_basic
2025-06-04T03:38:04.2841576Z     resource_test.go:40: Step 1/4 error: Error running apply: exit status 1
2025-06-04T03:38:04.2841974Z         
2025-06-04T03:38:04.2842388Z         Error: error during search deployment creation
2025-06-04T03:38:04.2842913Z         
2025-06-04T03:38:04.2843280Z           with mongodbatlas_search_deployment.test,
2025-06-04T03:38:04.2844070Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-06-04T03:38:04.2844848Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2025-06-04T03:38:04.2845167Z         
2025-06-04T03:38:04.2845710Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-06-04T03:38:04.2846216Z         timeout: 3h0m0s)
2025-06-04T03:39:14.7631894Z   
2025-06-04T03:42:57.7955543Z --- FAIL: TestAccSearchDeployment_basic (11618.08s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:51.6071824Z === RUN   TestAccSearchDeployment_basic
2025-06-05T00:28:56.2184196Z === CONT  TestAccSearchDeployment_basic
2025-06-05T00:31:57.5757083Z === NAME  TestAccSearchDeployment_basic
2025-06-05T00:31:57.5758087Z     resource_test.go:40: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:31:57.5758878Z         
2025-06-05T00:31:57.5761994Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c2161ca93c1f05230b/clusters/test-acc-tf-c-6618322091087983182 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:57.5764201Z         
2025-06-05T00:31:57.5764780Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:31:57.5765920Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:31:57.5767274Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:31:57.5767848Z         
2025-06-05T00:31:57.6491818Z --- FAIL: TestAccSearchDeployment_basic (181.43s)
```
### 2025-06-06
#### PASS 34 minutes
### 2025-06-07
#### PASS 33 minutes
### 2025-06-08
#### PASS 29 minutes
### 2025-06-09
#### PASS 31 minutes
### 2025-06-10
#### PASS 41 minutes
### 2025-06-11
#### PASS 29 minutes
#### PASS 31 minutes
### 2025-06-12
#### PASS 34 minutes
### 2025-06-13
#### PASS 38 minutes
### 2025-06-14
#### PASS 49 minutes
### 2025-06-15
#### PASS 32 minutes
### 2025-06-16
#### PASS 37 minutes
### 2025-06-17
#### PASS an hour
### 2025-06-18
#### PASS 31 minutes
### 2025-06-19
#### PASS 38 minutes
### 2025-06-20
#### PASS 31 minutes
### 2025-06-21
#### PASS 37 minutes
### 2025-06-22
#### PASS 36 minutes
### 2025-06-23
#### PASS 30 minutes
### 2025-06-24
#### PASS 31 minutes
### 2025-06-25
#### PASS 35 minutes
### 2025-06-26
#### PASS 36 minutes
### 2025-06-27
#### PASS 34 minutes
### 2025-06-28
#### PASS 35 minutes
### 2025-06-29
#### PASS 34 minutes
### 2025-06-30
#### PASS 31 minutes
### 2025-07-01
#### PASS 32 minutes
#### PASS 32 minutes
#### PASS 31 minutes
#### PASS 30 minutes
#### PASS 35 minutes
#### PASS 32 minutes
### 2025-07-02
#### PASS 33 minutes
### 2025-07-03
#### PASS 32 minutes
### 2025-07-04
#### PASS 31 minutes
### 2025-07-05
#### PASS 32 minutes
### 2025-07-06
#### PASS 33 minutes
### 2025-07-07
#### PASS 33 minutes
### 2025-07-08
#### PASS 32 minutes
### 2025-07-09
#### PASS 35 minutes
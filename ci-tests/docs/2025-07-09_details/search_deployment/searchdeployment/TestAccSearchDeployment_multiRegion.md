# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 112 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 108) FAIL(x 4)
Success rate: 96.43%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-01 04:52 | dev | 886.09s
2025-05-11 00:29 | qa | 0.00s
2025-06-04 00:29 | dev | 11649.04s
2025-06-05 00:28 | dev | 185.00s

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
#### PASS 25 minutes
### 2025-04-12
#### PASS 24 minutes
### 2025-04-13
#### PASS 29 minutes
### 2025-04-14
#### PASS 23 minutes
### 2025-04-15
#### PASS 25 minutes
### 2025-04-16
#### PASS 24 minutes
#### PASS 28 minutes
### 2025-04-17
#### PASS 26 minutes
### 2025-04-18
#### PASS 24 minutes
### 2025-04-19
#### PASS 26 minutes
### 2025-04-20
#### PASS 25 minutes
### 2025-04-21
#### PASS 24 minutes
### 2025-04-22
#### PASS 24 minutes
### 2025-04-23
#### PASS 26 minutes
### 2025-04-24
#### PASS 25 minutes
### 2025-04-25
#### PASS 23 minutes
### 2025-04-26
#### PASS 27 minutes
### 2025-04-27
#### PASS 27 minutes
### 2025-04-28
#### PASS 25 minutes
### 2025-04-29
#### PASS 24 minutes
### 2025-04-30
#### PASS 25 minutes
### 2025-05-01
#### PASS 24 minutes
#### PASS 24 minutes
#### PASS 23 minutes
#### FAIL 14 minutes
```
2025-05-01T04:52:11.2345655Z === RUN   TestAccSearchDeployment_multiRegion
2025-05-01T04:52:11.2346668Z     resource_test.go:52: Creating execution project: test-acc-tf-p-7284977648648918169
2025-05-01T04:52:13.0203570Z === CONT  TestAccSearchDeployment_multiRegion
2025-05-01T05:02:06.1930433Z === NAME  TestAccSearchDeployment_multiRegion
2025-05-01T05:02:06.1931585Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-05-01T05:02:06.1932220Z         
2025-05-01T05:02:06.1932875Z         Error: error during search deployment creation
2025-05-01T05:02:06.1933464Z         
2025-05-01T05:02:06.1934159Z           with mongodbatlas_search_deployment.test,
2025-05-01T05:02:06.1935435Z           on terraform_plugin_test.tf line 51, in resource "mongodbatlas_search_deployment" "test":
2025-05-01T05:02:06.1936605Z           51: 	resource "mongodbatlas_search_deployment" "test" {
2025-05-01T05:02:06.1937207Z         
2025-05-01T05:02:06.1938316Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-01T05:02:06.1939017Z         type
2025-05-01T05:06:58.1076341Z --- FAIL: TestAccSearchDeployment_multiRegion (886.87s)
```
#### PASS 24 minutes
#### PASS 24 minutes
#### PASS 24 minutes
### 2025-05-02
#### PASS 25 minutes
### 2025-05-03
#### PASS 25 minutes
### 2025-05-04
#### PASS 24 minutes
### 2025-05-05
#### PASS 20 minutes
### 2025-05-06
#### PASS 25 minutes
### 2025-05-07
#### PASS 25 minutes
### 2025-05-08
#### PASS 24 minutes
### 2025-05-09
#### PASS 25 minutes
### 2025-05-10
#### PASS 24 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:52.8165174Z === RUN   TestAccSearchDeployment_multiRegion
2025-05-11T00:29:52.8166124Z     resource_test.go:52: Creating execution project: test-acc-tf-p-2554541639729329184
2025-05-11T00:29:52.8244874Z     resource_test.go:52: 
2025-05-11T00:29:52.8246314Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:52.8249482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:52.8251484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:52.8253314Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:52
2025-05-11T00:29:52.8254081Z         	Error:      	Received unexpected error:
2025-05-11T00:29:52.8254950Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8255497Z         	Test:       	TestAccSearchDeployment_multiRegion
2025-05-11T00:29:52.8256489Z         	Messages:   	Project creation failed: test-acc-tf-p-2554541639729329184, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:52.8257178Z --- FAIL: TestAccSearchDeployment_multiRegion (0.01s)
```
### 2025-05-12
#### PASS 24 minutes
### 2025-05-13
#### PASS 25 minutes
#### PASS 24 minutes
### 2025-05-14
#### PASS 26 minutes
### 2025-05-15
#### PASS 26 minutes
### 2025-05-16
#### PASS 22 minutes
### 2025-05-17
#### PASS 22 minutes
### 2025-05-18
#### PASS 23 minutes
### 2025-05-19
#### PASS 26 minutes
### 2025-05-20
#### PASS 25 minutes
### 2025-05-21
#### PASS 25 minutes
### 2025-05-22
#### PASS 24 minutes
### 2025-05-23
#### PASS 22 minutes
### 2025-05-24
#### PASS 24 minutes
### 2025-05-25
#### PASS 24 minutes
### 2025-05-26
#### PASS 23 minutes
### 2025-05-27
#### PASS 24 minutes
### 2025-05-28
#### PASS 35 minutes
#### PASS 23 minutes
### 2025-05-29
#### PASS 24 minutes
### 2025-05-30
#### PASS 43 minutes
### 2025-05-31
#### PASS 25 minutes
### 2025-06-01
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 24 minutes
#### PASS 23 minutes
#### PASS 24 minutes
#### PASS 23 minutes
### 2025-06-02
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 22 minutes
### 2025-06-03
#### PASS 23 minutes
### 2025-06-04
#### FAIL 3 hours
```
2025-06-04T00:29:17.7461516Z === RUN   TestAccSearchDeployment_multiRegion
2025-06-04T00:29:17.7462762Z     resource_test.go:117: Creating execution project: test-acc-tf-p-935755538357691856
2025-06-04T00:29:19.7157197Z === CONT  TestAccSearchDeployment_multiRegion
2025-06-04T03:39:14.7632268Z === NAME  TestAccSearchDeployment_multiRegion
2025-06-04T03:39:14.7632923Z     resource_test.go:129: Step 1/1 error: Error running apply: exit status 1
2025-06-04T03:39:14.7633391Z         
2025-06-04T03:39:14.7633843Z         Error: error during search deployment creation
2025-06-04T03:39:14.7634174Z         
2025-06-04T03:39:14.7634604Z           with mongodbatlas_search_deployment.test,
2025-06-04T03:39:14.7635360Z           on terraform_plugin_test.tf line 51, in resource "mongodbatlas_search_deployment" "test":
2025-06-04T03:39:14.7636014Z           51: 	resource "mongodbatlas_search_deployment" "test" {
2025-06-04T03:39:14.7636414Z         
2025-06-04T03:39:14.7636937Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-06-04T03:39:14.7637400Z         timeout: 3h0m0s)
2025-06-04T03:39:16.7773471Z   
2025-06-04T03:43:27.1306717Z --- FAIL: TestAccSearchDeployment_multiRegion (11649.38s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:52.5878424Z === RUN   TestAccSearchDeployment_multiRegion
2025-06-05T00:28:52.5879304Z     resource_test.go:117: Creating execution project: test-acc-tf-p-371991101664277205
2025-06-05T00:28:56.2184954Z === CONT  TestAccSearchDeployment_multiRegion
2025-06-05T00:31:57.5671475Z    test_terraform_path=/home/runner/work/_temp/26d8ea31-4406-4a84-9b79-80d10045478c/terraform test_name=TestAccSearchDeployment_multiRegion
2025-06-05T00:31:57.5674455Z     resource_test.go:129: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:57.5675131Z         
2025-06-05T00:31:57.5678022Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c4161ca93c1f0525fa/clusters/multi-region-cluster GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:57.5680010Z         
2025-06-05T00:31:57.5680682Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:31:57.5681944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:31:57.5683336Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:31:57.5683959Z         
2025-06-05T00:31:57.6375967Z --- FAIL: TestAccSearchDeployment_multiRegion (185.05s)
```
### 2025-06-06
#### PASS 24 minutes
### 2025-06-07
#### PASS 25 minutes
### 2025-06-08
#### PASS 23 minutes
### 2025-06-09
#### PASS 24 minutes
### 2025-06-10
#### PASS 35 minutes
### 2025-06-11
#### PASS 23 minutes
#### PASS 24 minutes
### 2025-06-12
#### PASS 25 minutes
### 2025-06-13
#### PASS 27 minutes
### 2025-06-14
#### PASS 29 minutes
### 2025-06-15
#### PASS 24 minutes
### 2025-06-16
#### PASS 29 minutes
### 2025-06-17
#### PASS 25 minutes
### 2025-06-18
#### PASS 35 minutes
### 2025-06-19
#### PASS 31 minutes
### 2025-06-20
#### PASS 25 minutes
### 2025-06-21
#### PASS 25 minutes
### 2025-06-22
#### PASS 25 minutes
### 2025-06-23
#### PASS 23 minutes
### 2025-06-24
#### PASS 24 minutes
### 2025-06-25
#### PASS 27 minutes
### 2025-06-26
#### PASS 24 minutes
### 2025-06-27
#### PASS 23 minutes
### 2025-06-28
#### PASS 25 minutes
### 2025-06-29
#### PASS 26 minutes
### 2025-06-30
#### PASS 23 minutes
### 2025-07-01
#### PASS 25 minutes
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 23 minutes
#### PASS 23 minutes
### 2025-07-02
#### PASS 23 minutes
### 2025-07-03
#### PASS 24 minutes
### 2025-07-04
#### PASS 22 minutes
### 2025-07-05
#### PASS 23 minutes
### 2025-07-06
#### PASS 23 minutes
### 2025-07-07
#### PASS 24 minutes
### 2025-07-08
#### PASS 25 minutes
### 2025-07-09
#### PASS 27 minutes
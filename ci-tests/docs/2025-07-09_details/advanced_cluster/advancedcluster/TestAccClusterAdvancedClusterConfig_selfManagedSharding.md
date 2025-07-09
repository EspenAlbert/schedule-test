# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-20 00:57 | qa | 5.05s
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 185.05s

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
### 2025-04-10
#### PASS 20 minutes
### 2025-04-11
#### PASS 14 minutes
### 2025-04-12
#### PASS 17 minutes
### 2025-04-13
#### PASS 24 minutes
### 2025-04-14
#### PASS 18 minutes
### 2025-04-15
#### PASS 29 minutes
### 2025-04-16
#### PASS 16 minutes
#### PASS 22 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 19 minutes
### 2025-04-19
#### PASS 17 minutes
### 2025-04-20
#### FAIL 5 seconds
```
2025-04-20T00:57:03.6397846Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-04-20T00:58:09.0130410Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-04-20T00:58:14.2387785Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-04-20T00:58:14.2389159Z     resource_advanced_cluster_test.go:741: Step 1/3 error: Error running apply: exit status 1
2025-04-20T00:58:14.2389986Z         
2025-04-20T00:58:14.2393024Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6804465de9e1f62c2da3b806/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-04-20T00:58:14.2395200Z         
2025-04-20T00:58:14.2395866Z           with mongodbatlas_advanced_cluster.test,
2025-04-20T00:58:14.2397043Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-04-20T00:58:14.2398119Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-04-20T00:58:14.2400473Z         
2025-04-20T00:58:14.5498024Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.55s)
```
### 2025-04-21
#### PASS 21 minutes
### 2025-04-22
#### PASS 17 minutes
### 2025-04-23
#### PASS 20 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 18 minutes
### 2025-04-26
#### PASS 17 minutes
### 2025-04-27
#### PASS 19 minutes
### 2025-04-28
#### PASS 17 minutes
### 2025-04-29
#### PASS 16 minutes
### 2025-04-30
#### PASS 25 minutes
### 2025-05-01
#### PASS 17 minutes
#### PASS 18 minutes
#### PASS 19 minutes
#### PASS 20 minutes
#### PASS 16 minutes
#### PASS 17 minutes
#### PASS 18 minutes
### 2025-05-02
#### PASS 21 minutes
### 2025-05-03
#### PASS 19 minutes
### 2025-05-04
#### PASS 17 minutes
### 2025-05-05
#### PASS 18 minutes
### 2025-05-06
#### PASS 23 minutes
### 2025-05-07
#### PASS 25 minutes
### 2025-05-08
#### PASS 22 minutes
### 2025-05-09
#### PASS 22 minutes
### 2025-05-10
#### PASS 20 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:10.3040500Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-11T00:30:10.3647820Z     shared_resource.go:84: 
2025-05-11T00:30:10.3649134Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.3651530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.3653440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.3655294Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.3657371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:733
2025-05-11T00:30:10.3658251Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.3659171Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.3659852Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-11T00:30:10.3661021Z         	Messages:   	Project creation failed: test-acc-tf-p-1460258377904855630, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.3661933Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (0.06s)
```
### 2025-05-12
#### PASS 18 minutes
### 2025-05-13
#### PASS 19 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 22 minutes
### 2025-05-15
#### PASS 23 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 18 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 16 minutes
### 2025-05-20
#### PASS 24 minutes
### 2025-05-21
#### PASS 19 minutes
### 2025-05-22
#### PASS 18 minutes
### 2025-05-23
#### PASS 17 minutes
### 2025-05-24
#### PASS 18 minutes
### 2025-05-25
#### PASS 19 minutes
### 2025-05-26
#### PASS 18 minutes
### 2025-05-27
#### PASS 16 minutes
### 2025-05-28
#### PASS 15 minutes
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-05-29
#### PASS 34 minutes
#### PASS 15 minutes
### 2025-05-30
#### PASS an hour
#### PASS 13 minutes
### 2025-05-31
#### PASS 19 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-06-02
#### PASS 19 minutes
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 19 minutes
### 2025-06-04
#### PASS 18 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:30.3573932Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:42.8662257Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:38:48.2237555Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:38:48.2238676Z     resource_advanced_cluster_test.go:744: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:48.2239448Z         
2025-06-05T00:38:48.2242592Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64fc939f27413252998/clusters/test-acc-tf-c-6783349188098141309 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.2244664Z         
2025-06-05T00:38:48.2245358Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:48.2259468Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:48.2265096Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:48.2266828Z         
2025-06-05T00:38:48.3911457Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (185.53s)
```
### 2025-06-06
#### PASS 19 minutes
### 2025-06-07
#### PASS 22 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 17 minutes
### 2025-06-10
#### PASS 22 minutes
### 2025-06-11
#### PASS 20 minutes
#### PASS 18 minutes
### 2025-06-12
#### PASS 21 minutes
### 2025-06-13
#### PASS 21 minutes
### 2025-06-14
#### PASS 34 minutes
### 2025-06-15
#### PASS 19 minutes
### 2025-06-16
#### PASS 20 minutes
### 2025-06-17
#### PASS 19 minutes
### 2025-06-18
#### PASS 16 minutes
#### PASS 19 minutes
### 2025-06-19
#### PASS 52 minutes
### 2025-06-20
#### PASS 20 minutes
### 2025-06-21
#### PASS 20 minutes
### 2025-06-22
#### PASS 27 minutes
### 2025-06-23
#### PASS 16 minutes
### 2025-06-24
#### PASS 29 minutes
### 2025-06-25
#### PASS 16 minutes
### 2025-06-26
#### PASS 16 minutes
### 2025-06-27
#### PASS 14 minutes
### 2025-06-28
#### PASS 18 minutes
### 2025-06-29
#### PASS 16 minutes
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 17 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 21 minutes
### 2025-07-04
#### PASS 17 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### PASS 17 minutes
### 2025-07-07
#### PASS 21 minutes
### 2025-07-08
#### PASS 20 minutes
### 2025-07-09
#### PASS 18 minutes
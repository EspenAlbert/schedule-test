# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-05-17 00:59 | dev | 11926.05s
2025-06-05 00:35 | dev | 221.03s

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
#### PASS 51 minutes
### 2025-04-11
#### PASS 39 minutes
### 2025-04-12
#### PASS 37 minutes
### 2025-04-13
#### PASS 50 minutes
### 2025-04-14
#### PASS 32 minutes
### 2025-04-15
#### PASS 49 minutes
### 2025-04-16
#### PASS 35 minutes
#### PASS 52 minutes
### 2025-04-17
#### PASS 35 minutes
### 2025-04-18
#### PASS 38 minutes
### 2025-04-19
#### PASS 39 minutes
### 2025-04-20
#### PASS 43 minutes
### 2025-04-21
#### PASS 39 minutes
### 2025-04-22
#### PASS 39 minutes
### 2025-04-23
#### PASS 40 minutes
### 2025-04-24
#### PASS 36 minutes
### 2025-04-25
#### PASS 38 minutes
### 2025-04-26
#### PASS 39 minutes
### 2025-04-27
#### PASS 40 minutes
### 2025-04-28
#### PASS 39 minutes
### 2025-04-29
#### PASS 37 minutes
### 2025-04-30
#### PASS 47 minutes
### 2025-05-01
#### PASS 36 minutes
#### PASS 39 minutes
#### PASS 38 minutes
#### PASS 38 minutes
#### PASS 38 minutes
#### PASS 36 minutes
#### PASS 34 minutes
### 2025-05-02
#### PASS 47 minutes
### 2025-05-03
#### PASS 39 minutes
### 2025-05-04
#### PASS 38 minutes
### 2025-05-05
#### PASS 37 minutes
### 2025-05-06
#### PASS 39 minutes
### 2025-05-07
#### PASS 38 minutes
### 2025-05-08
#### PASS 38 minutes
### 2025-05-09
#### PASS 42 minutes
### 2025-05-10
#### PASS 36 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:10.1782041Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-11T00:30:10.2395001Z     shared_resource.go:84: 
2025-05-11T00:30:10.2397020Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.2398894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.2400991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.2402812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.2404868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:582
2025-05-11T00:30:10.2405744Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.2406661Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.2407458Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-11T00:30:10.2408735Z         	Messages:   	Project creation failed: test-acc-tf-p-2627688701680714404, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.2409559Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (0.06s)
```
### 2025-05-12
#### PASS 40 minutes
### 2025-05-13
#### PASS 39 minutes
#### PASS 37 minutes
### 2025-05-14
#### PASS 44 minutes
### 2025-05-15
#### PASS 40 minutes
### 2025-05-16
#### PASS 39 minutes
### 2025-05-17
#### FAIL 3 hours
```
2025-05-17T00:59:04.4487599Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-17T01:00:19.3288875Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-17T01:00:44.3265878Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-17T01:00:44.3270899Z     pre_check.go:40: Time before creating cluster: 2025-05-17T01:00:44.32622055Z, ProjectID: 6827df5657890c6f593f4575, Cluster name: test-acc-tf-c-6103658413346084088
2025-05-17T04:19:05.7609838Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-05-17T04:19:05.7611532Z     resource_advanced_cluster_test.go:594: Step 2/5 error: Error running apply: exit status 1
2025-05-17T04:19:05.7612349Z         
2025-05-17T04:19:05.7613735Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-05-17T04:19:05.7614773Z         
2025-05-17T04:19:05.7615381Z           with mongodbatlas_advanced_cluster.test,
2025-05-17T04:19:05.7616626Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-17T04:19:05.7617763Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-17T04:19:05.7618350Z         
2025-05-17T04:19:05.8162298Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (11926.49s)
```
### 2025-05-18
#### PASS 38 minutes
### 2025-05-19
#### PASS 41 minutes
### 2025-05-20
#### PASS 39 minutes
### 2025-05-21
#### PASS 41 minutes
### 2025-05-22
#### PASS 40 minutes
### 2025-05-23
#### PASS 46 minutes
### 2025-05-24
#### PASS 37 minutes
### 2025-05-25
#### PASS 40 minutes
### 2025-05-26
#### PASS 38 minutes
### 2025-05-27
#### PASS 36 minutes
### 2025-05-28
#### PASS 33 minutes
#### PASS 37 minutes
#### PASS 40 minutes
### 2025-05-29
#### PASS 42 minutes
#### PASS 32 minutes
### 2025-05-30
#### PASS an hour
#### PASS 34 minutes
### 2025-05-31
#### PASS 39 minutes
### 2025-06-01
#### PASS 34 minutes
#### PASS 36 minutes
#### PASS 31 minutes
#### PASS 34 minutes
#### PASS 37 minutes
#### PASS 35 minutes
### 2025-06-02
#### PASS 39 minutes
#### PASS 40 minutes
#### PASS 35 minutes
### 2025-06-03
#### PASS 39 minutes
### 2025-06-04
#### PASS 38 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:30.3566806Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:35:42.8414752Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:36:22.8209361Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:36:22.8210756Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:22.820616409Z, ProjectID: 6840e64fc939f27413252998, Cluster name: test-acc-tf-c-1587034922040757962
2025-06-05T00:39:24.0442008Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2025-06-05T00:39:24.0442729Z     resource_advanced_cluster_test.go:597: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:39:24.0443234Z         
2025-06-05T00:39:24.0445164Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64fc939f27413252998/clusters/test-acc-tf-c-1587034922040757962 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:24.0446651Z         
2025-06-05T00:39:24.0446982Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:24.0447626Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:24.0448217Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:24.0448529Z         
2025-06-05T00:39:24.0862413Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (221.26s)
```
### 2025-06-06
#### PASS 49 minutes
### 2025-06-07
#### PASS 39 minutes
### 2025-06-08
#### PASS 37 minutes
### 2025-06-09
#### PASS 44 minutes
### 2025-06-10
#### PASS 49 minutes
### 2025-06-11
#### PASS 36 minutes
#### PASS 46 minutes
### 2025-06-12
#### PASS 41 minutes
### 2025-06-13
#### PASS 41 minutes
### 2025-06-14
#### PASS 44 minutes
### 2025-06-15
#### PASS 41 minutes
### 2025-06-16
#### PASS 41 minutes
### 2025-06-17
#### PASS 38 minutes
### 2025-06-18
#### PASS 40 minutes
#### PASS 38 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 39 minutes
### 2025-06-21
#### PASS 38 minutes
### 2025-06-22
#### PASS 52 minutes
### 2025-06-23
#### PASS 34 minutes
### 2025-06-24
#### PASS an hour
### 2025-06-25
#### PASS 37 minutes
### 2025-06-26
#### PASS 37 minutes
### 2025-06-27
#### PASS 52 minutes
### 2025-06-28
#### PASS 38 minutes
### 2025-06-29
#### PASS 43 minutes
### 2025-06-30
#### PASS 39 minutes
### 2025-07-01
#### PASS 37 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 36 minutes
#### PASS 46 minutes
### 2025-07-02
#### PASS 36 minutes
### 2025-07-03
#### PASS 36 minutes
### 2025-07-04
#### PASS 36 minutes
### 2025-07-05
#### PASS 35 minutes
### 2025-07-06
#### PASS 36 minutes
### 2025-07-07
#### PASS 33 minutes
### 2025-07-08
#### PASS 36 minutes
### 2025-07-09
#### PASS 35 minutes
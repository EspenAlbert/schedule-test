# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-05-17 00:59 | dev | 11842.04s
2025-05-28 09:05 | qa | 1008.04s
2025-06-05 00:35 | dev | 239.04s

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
#### PASS 36 minutes
### 2025-04-11
#### PASS 29 minutes
### 2025-04-12
#### PASS 29 minutes
### 2025-04-13
#### PASS 37 minutes
### 2025-04-14
#### PASS 27 minutes
### 2025-04-15
#### PASS 42 minutes
### 2025-04-16
#### PASS 28 minutes
#### PASS 40 minutes
### 2025-04-17
#### PASS 31 minutes
### 2025-04-18
#### PASS 30 minutes
### 2025-04-19
#### PASS 29 minutes
### 2025-04-20
#### PASS 36 minutes
### 2025-04-21
#### PASS 30 minutes
### 2025-04-22
#### PASS 30 minutes
### 2025-04-23
#### PASS 32 minutes
### 2025-04-24
#### PASS 29 minutes
### 2025-04-25
#### PASS 30 minutes
### 2025-04-26
#### PASS 29 minutes
### 2025-04-27
#### PASS 33 minutes
### 2025-04-28
#### PASS 31 minutes
### 2025-04-29
#### PASS 27 minutes
### 2025-04-30
#### PASS 37 minutes
### 2025-05-01
#### PASS 30 minutes
#### PASS 31 minutes
#### PASS 30 minutes
#### PASS 29 minutes
#### PASS 30 minutes
#### PASS 28 minutes
#### PASS 27 minutes
### 2025-05-02
#### PASS 36 minutes
### 2025-05-03
#### PASS 30 minutes
### 2025-05-04
#### PASS 29 minutes
### 2025-05-05
#### PASS 30 minutes
### 2025-05-06
#### PASS 30 minutes
### 2025-05-07
#### PASS 36 minutes
### 2025-05-08
#### PASS 35 minutes
### 2025-05-09
#### PASS 34 minutes
### 2025-05-10
#### PASS 27 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:10.0541460Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-11T00:30:10.1148263Z     shared_resource.go:84: 
2025-05-11T00:30:10.1150294Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:10.1153422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:10.1155604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:10.1157927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:10.1160155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:479
2025-05-11T00:30:10.1161234Z         	Error:      	Received unexpected error:
2025-05-11T00:30:10.1162201Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.1162839Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2025-05-11T00:30:10.1163990Z         	Messages:   	Project creation failed: test-acc-tf-p-7036948881878247390, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:10.1164814Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (0.06s)
```
### 2025-05-12
#### PASS 31 minutes
### 2025-05-13
#### PASS 29 minutes
#### PASS 28 minutes
### 2025-05-14
#### PASS 34 minutes
### 2025-05-15
#### PASS 32 minutes
### 2025-05-16
#### PASS 32 minutes
### 2025-05-17
#### FAIL 3 hours
```
2025-05-17T00:59:02.1287524Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-17T01:00:19.3291114Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-17T01:00:54.3279190Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-17T01:00:54.3281779Z     pre_check.go:40: Time before creating cluster: 2025-05-17T01:00:54.327548732Z, ProjectID: 6827df5657890c6f593f4575, Cluster name: test-acc-tf-c-8525174141986573055
2025-05-17T04:17:39.3760509Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-17T04:17:39.3762193Z     resource_advanced_cluster_test.go:504: Step 2/3 error: Error running apply: exit status 1
2025-05-17T04:17:39.3763208Z         
2025-05-17T04:17:39.3764965Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-05-17T04:17:39.3766369Z         
2025-05-17T04:17:39.3766990Z           with mongodbatlas_advanced_cluster.test,
2025-05-17T04:17:39.3768276Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-17T04:17:39.3769391Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-17T04:17:39.3769959Z         
2025-05-17T04:17:39.4304771Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (11842.42s)
```
### 2025-05-18
#### PASS 29 minutes
### 2025-05-19
#### PASS 33 minutes
### 2025-05-20
#### PASS 31 minutes
### 2025-05-21
#### PASS 28 minutes
### 2025-05-22
#### PASS 31 minutes
### 2025-05-23
#### PASS 27 minutes
### 2025-05-24
#### PASS 28 minutes
### 2025-05-25
#### PASS 33 minutes
### 2025-05-26
#### PASS 31 minutes
### 2025-05-27
#### PASS 28 minutes
### 2025-05-28
#### PASS 25 minutes
#### FAIL 16 minutes
```
2025-05-28T09:05:05.0929696Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:06:19.1760119Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:06:44.1707646Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:06:44.1709944Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:06:44.170459339Z, ProjectID: 6836d1c1d000797dbe922198, Cluster name: test-acc-tf-c-1097220744388580423
2025-05-28T09:18:53.5888075Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-28T09:18:53.5889295Z     resource_advanced_cluster_test.go:507: Step 1/3 error: Error running post-apply non-refresh plan: exit status 1
2025-05-28T09:18:53.5890181Z         
2025-05-28T09:18:53.5891220Z         Error: error reading  advanced cluster (test-acc-tf-c-1097220744388580423): undefined response type
2025-05-28T09:18:53.5892200Z         
2025-05-28T09:18:53.5892835Z           with data.mongodbatlas_advanced_cluster.test,
2025-05-28T09:18:53.5894018Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_cluster" "test":
2025-05-28T09:18:53.5895044Z           45: 	data "mongodbatlas_advanced_cluster" "test" {
2025-05-28T09:18:53.5895603Z         
2025-05-28T09:18:53.5897564Z         Error: error reading advanced cluster list for project(6836d1c1d000797dbe922198): (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T09:18:53.5898787Z         
2025-05-28T09:18:53.5899423Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T09:18:53.5900604Z           on terraform_plugin_test.tf line 52, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T09:18:53.5902001Z           52: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T09:18:53.5902564Z         
2025-05-28T09:23:06.0014674Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (1008.42s)
```
#### PASS 30 minutes
### 2025-05-29
#### PASS 37 minutes
#### PASS 24 minutes
### 2025-05-30
#### PASS an hour
#### PASS 26 minutes
### 2025-05-31
#### PASS 29 minutes
### 2025-06-01
#### PASS 26 minutes
#### PASS 28 minutes
#### PASS 25 minutes
#### PASS 25 minutes
#### PASS 26 minutes
#### PASS 27 minutes
### 2025-06-02
#### PASS 29 minutes
#### PASS 25 minutes
#### PASS 27 minutes
### 2025-06-03
#### PASS 31 minutes
### 2025-06-04
#### PASS 30 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:27.2508986Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:35:42.8416653Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:36:37.8221347Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:36:37.8223012Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:37.821834085Z, ProjectID: 6840e64fc939f27413252998, Cluster name: test-acc-tf-c-3192005317086672187
2025-06-05T00:39:39.0950190Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:39:39.0950982Z     resource_advanced_cluster_test.go:507: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:39:39.0951579Z         
2025-06-05T00:39:39.0953813Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64fc939f27413252998/clusters/test-acc-tf-c-3192005317086672187 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:39.0955480Z         
2025-06-05T00:39:39.0955815Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:39.0956477Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:39.0957068Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:39.0957374Z         
2025-06-05T00:39:39.1415889Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (239.42s)
```
### 2025-06-06
#### PASS 43 minutes
### 2025-06-07
#### PASS 29 minutes
### 2025-06-08
#### PASS 29 minutes
### 2025-06-09
#### PASS an hour
### 2025-06-10
#### PASS 35 minutes
### 2025-06-11
#### PASS 28 minutes
#### PASS 37 minutes
### 2025-06-12
#### PASS 31 minutes
### 2025-06-13
#### PASS 37 minutes
### 2025-06-14
#### PASS 37 minutes
### 2025-06-15
#### PASS 30 minutes
### 2025-06-16
#### PASS 33 minutes
### 2025-06-17
#### PASS 32 minutes
### 2025-06-18
#### PASS 33 minutes
#### PASS 29 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 30 minutes
### 2025-06-21
#### PASS 30 minutes
### 2025-06-22
#### PASS 37 minutes
### 2025-06-23
#### PASS 25 minutes
### 2025-06-24
#### PASS 39 minutes
### 2025-06-25
#### PASS 25 minutes
### 2025-06-26
#### PASS 28 minutes
### 2025-06-27
#### PASS 40 minutes
### 2025-06-28
#### PASS 28 minutes
### 2025-06-29
#### PASS 34 minutes
### 2025-06-30
#### PASS 29 minutes
### 2025-07-01
#### PASS 30 minutes
#### PASS 28 minutes
#### PASS 27 minutes
#### PASS 27 minutes
#### PASS 27 minutes
### 2025-07-02
#### PASS 30 minutes
### 2025-07-03
#### PASS 29 minutes
### 2025-07-04
#### PASS 29 minutes
### 2025-07-05
#### PASS 26 minutes
### 2025-07-06
#### PASS 27 minutes
### 2025-07-07
#### PASS 26 minutes
### 2025-07-08
#### PASS 33 minutes
### 2025-07-09
#### PASS 28 minutes
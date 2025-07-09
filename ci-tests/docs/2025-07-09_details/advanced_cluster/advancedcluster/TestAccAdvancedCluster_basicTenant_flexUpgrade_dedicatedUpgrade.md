# advanced_cluster/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-05-23 00:28 | dev | 826.01s
2025-06-05 00:29 | dev | 186.10s
2025-06-10 00:38 | dev | 903.05s

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
#### PASS 29 minutes
### 2025-04-11
#### PASS 19 minutes
### 2025-04-12
#### PASS 22 minutes
### 2025-04-13
#### PASS 28 minutes
### 2025-04-14
#### PASS 19 minutes
### 2025-04-15
#### PASS 22 minutes
### 2025-04-16
#### PASS 21 minutes
#### PASS 28 minutes
### 2025-04-17
#### PASS 22 minutes
### 2025-04-18
#### PASS 21 minutes
### 2025-04-19
#### PASS 20 minutes
### 2025-04-20
#### PASS 21 minutes
### 2025-04-21
#### PASS 21 minutes
### 2025-04-22
#### PASS 19 minutes
### 2025-04-23
#### PASS 20 minutes
### 2025-04-24
#### PASS 22 minutes
### 2025-04-25
#### PASS 21 minutes
### 2025-04-26
#### PASS 21 minutes
### 2025-04-27
#### PASS 24 minutes
### 2025-04-28
#### PASS 22 minutes
### 2025-04-29
#### PASS 20 minutes
### 2025-04-30
#### PASS 23 minutes
### 2025-05-01
#### PASS 23 minutes
#### PASS 21 minutes
#### PASS 18 minutes
#### PASS 19 minutes
#### PASS 20 minutes
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 21 minutes
### 2025-05-04
#### PASS 20 minutes
### 2025-05-05
#### PASS 19 minutes
### 2025-05-06
#### PASS 21 minutes
### 2025-05-07
#### PASS 22 minutes
### 2025-05-08
#### PASS 22 minutes
### 2025-05-09
#### PASS 23 minutes
### 2025-05-10
#### PASS 21 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.4927084Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-05-11T00:30:09.5540193Z     shared_resource.go:84: 
2025-05-11T00:30:09.5541737Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.5544158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.5546208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.5548179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.5550423Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:124
2025-05-11T00:30:09.5552967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:153
2025-05-11T00:30:09.5553905Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.5554825Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.5555489Z         	Test:       	TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-05-11T00:30:09.5556555Z         	Messages:   	Project creation failed: test-acc-tf-p-4919465535106672485, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.5557316Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (0.06s)
```
### 2025-05-12
#### PASS 19 minutes
### 2025-05-13
#### PASS 21 minutes
#### PASS 21 minutes
### 2025-05-14
#### PASS 21 minutes
### 2025-05-15
#### PASS 23 minutes
### 2025-05-16
#### PASS 23 minutes
### 2025-05-17
#### PASS 24 minutes
### 2025-05-18
#### PASS 21 minutes
### 2025-05-19
#### PASS 22 minutes
### 2025-05-20
#### PASS 24 minutes
### 2025-05-21
#### PASS 23 minutes
### 2025-05-22
#### PASS 26 minutes
### 2025-05-23
#### FAIL 13 minutes
```
2025-05-23T00:28:50.2781471Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-05-23T00:28:55.2826499Z     pre_check.go:40: Time before creating cluster: 2025-05-23T00:28:55.282223556Z, ProjectID: 682fc13e1fcba3225667b2df, Cluster name: test-acc-tf-c-8077060025682706798
2025-05-23T00:42:36.1574756Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest3639282956 test_step_number=3
2025-05-23T00:42:36.1576435Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-05-23T00:42:36.1577076Z         
2025-05-23T00:42:36.1578234Z         Error: error updating advanced cluster (test-acc-tf-c-8077060025682706798): couldn't find resource (21 retries)
2025-05-23T00:42:36.1579106Z         
2025-05-23T00:42:36.1579715Z           with mongodbatlas_advanced_cluster.test,
2025-05-23T00:42:36.1580904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-23T00:42:36.1581986Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-05-23T00:42:36.1582896Z         
2025-05-23T00:42:36.3591125Z    test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-05-23T00:42:36.3592172Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-23T00:42:36.3592832Z         
2025-05-23T00:42:36.3596587Z         Error: error deleting advanced cluster (test-acc-tf-c-8077060025682706798): https://cloud-dev.mongodb.com/api/atlas/v2/groups/682fc13e1fcba3225667b2df/clusters/test-acc-tf-c-8077060025682706798 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-8077060025682706798 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-8077060025682706798], BadRequestDetail: 
2025-05-23T00:42:36.3598386Z         
2025-05-23T00:42:36.3598776Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (826.08s)
```
### 2025-05-24
#### PASS 24 minutes
### 2025-05-25
#### PASS 22 minutes
### 2025-05-26
#### PASS 22 minutes
### 2025-05-27
#### PASS 22 minutes
### 2025-05-28
#### PASS 37 minutes
#### PASS 21 minutes
#### PASS 21 minutes
### 2025-05-29
#### PASS 20 minutes
#### PASS 19 minutes
### 2025-05-30
#### PASS 21 minutes
#### PASS 19 minutes
### 2025-05-31
#### PASS 21 minutes
### 2025-06-01
#### PASS 20 minutes
#### PASS 20 minutes
#### PASS 21 minutes
#### PASS 21 minutes
#### PASS 21 minutes
#### PASS 19 minutes
### 2025-06-02
#### PASS 20 minutes
#### PASS 23 minutes
#### PASS 20 minutes
### 2025-06-03
#### PASS 22 minutes
### 2025-06-04
#### PASS 22 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:29:11.3297041Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-06-05T00:29:16.3346831Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:16.334004348Z, ProjectID: 6840e4d5161ca93c1f052fd9, Cluster name: test-acc-tf-c-6197113211571558087
2025-06-05T00:32:18.2676563Z    test_terraform_path=/home/runner/work/_temp/2d4b31c9-479e-44d7-b7ae-aa2b06b7e890/terraform test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_working_directory=/tmp/plugintest2583864693
2025-06-05T00:32:18.2678301Z     resource_advanced_cluster_test.go:156: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:32:18.2679115Z         
2025-06-05T00:32:18.2681607Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters/test-acc-tf-c-6197113211571558087 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:18.2683017Z         
2025-06-05T00:32:18.2683364Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:32:18.2684065Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:32:18.2684909Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:32:18.2685455Z         
2025-06-05T00:32:18.3110235Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (186.98s)
```
### 2025-06-06
#### PASS 23 minutes
### 2025-06-07
#### PASS 22 minutes
### 2025-06-08
#### PASS 19 minutes
### 2025-06-09
#### PASS 22 minutes
### 2025-06-10
#### FAIL 15 minutes
```
2025-06-10T00:38:13.3338675Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-06-10T00:38:18.3381608Z     pre_check.go:40: Time before creating cluster: 2025-06-10T00:38:18.337795039Z, ProjectID: 68477e739fcc7665ab83150e, Cluster name: test-acc-tf-c-3239540693277591186
2025-06-10T00:53:16.5601953Z    test_step_number=3 test_working_directory=/tmp/plugintest365707686
2025-06-10T00:53:16.5603241Z     resource_advanced_cluster_test.go:156: Step 3/3 error: Error running apply: exit status 1
2025-06-10T00:53:16.5603947Z         
2025-06-10T00:53:16.5604624Z         Error: error updating advanced cluster (test-acc-tf-c-3239540693277591186): couldn't find resource (21 retries)
2025-06-10T00:53:16.5605252Z         
2025-06-10T00:53:16.5605597Z           with mongodbatlas_advanced_cluster.test,
2025-06-10T00:53:16.5606996Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-10T00:53:16.5607992Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-06-10T00:53:16.5608577Z         
2025-06-10T00:53:16.8413857Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-10T00:53:16.8414516Z         
2025-06-10T00:53:16.8416874Z         Error: error deleting advanced cluster (test-acc-tf-c-3239540693277591186): https://cloud-dev.mongodb.com/api/atlas/v2/groups/68477e739fcc7665ab83150e/clusters/test-acc-tf-c-3239540693277591186 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster test-acc-tf-c-3239540693277591186 cannot be used in the Cluster API. Reason: Bad Request. Params: [test-acc-tf-c-3239540693277591186], BadRequestDetail: 
2025-06-10T00:53:16.8418673Z         
2025-06-10T00:53:16.8419039Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (903.51s)
```
### 2025-06-11
#### PASS 25 minutes
#### PASS 21 minutes
### 2025-06-12
#### PASS 24 minutes
### 2025-06-13
#### PASS 25 minutes
### 2025-06-14
#### PASS 32 minutes
### 2025-06-15
#### PASS 23 minutes
### 2025-06-16
#### PASS 25 minutes
### 2025-06-17
#### PASS 22 minutes
### 2025-06-18
#### PASS 21 minutes
#### PASS 22 minutes
### 2025-06-19
#### PASS 30 minutes
### 2025-06-20
#### PASS 25 minutes
### 2025-06-21
#### PASS 25 minutes
### 2025-06-22
#### PASS 23 minutes
### 2025-06-23
#### PASS 21 minutes
### 2025-06-24
#### PASS 23 minutes
### 2025-06-25
#### PASS 31 minutes
### 2025-06-26
#### PASS 22 minutes
### 2025-06-27
#### PASS 21 minutes
### 2025-06-28
#### PASS 23 minutes
### 2025-06-29
#### PASS 24 minutes
### 2025-06-30
#### PASS 21 minutes
### 2025-07-01
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 21 minutes
### 2025-07-02
#### PASS 23 minutes
### 2025-07-03
#### PASS 21 minutes
### 2025-07-04
#### PASS 22 minutes
### 2025-07-05
#### PASS 21 minutes
### 2025-07-06
#### PASS 21 minutes
### 2025-07-07
#### PASS 22 minutes
### 2025-07-08
#### PASS 22 minutes
### 2025-07-09
#### PASS 32 minutes
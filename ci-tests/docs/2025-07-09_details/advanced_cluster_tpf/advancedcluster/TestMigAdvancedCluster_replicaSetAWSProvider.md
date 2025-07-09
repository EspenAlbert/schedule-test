# advanced_cluster_tpf/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-05-28 12:04 | qa | 10810.01s
2025-06-05 00:35 | dev | 23.06s

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
#### PASS 15 minutes
### 2025-04-11
#### PASS 15 minutes
### 2025-04-12
#### PASS 12 minutes
### 2025-04-13
#### PASS 16 minutes
### 2025-04-14
#### PASS 12 minutes
### 2025-04-15
#### PASS 13 minutes
### 2025-04-16
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 11 minutes
### 2025-04-19
#### PASS 14 minutes
### 2025-04-20
#### PASS 18 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 11 minutes
### 2025-04-23
#### PASS 13 minutes
### 2025-04-24
#### PASS 12 minutes
### 2025-04-25
#### PASS 13 minutes
### 2025-04-26
#### PASS 14 minutes
### 2025-04-27
#### PASS 15 minutes
### 2025-04-28
#### PASS 14 minutes
### 2025-04-29
#### PASS 12 minutes
### 2025-04-30
#### PASS 13 minutes
### 2025-05-01
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 11 minutes
#### PASS 14 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 19 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 13 minutes
### 2025-05-05
#### PASS 12 minutes
### 2025-05-06
#### PASS 17 minutes
### 2025-05-07
#### PASS 15 minutes
### 2025-05-08
#### PASS 14 minutes
### 2025-05-09
#### PASS 15 minutes
### 2025-05-10
#### PASS 14 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7625116Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:01.7625746Z     shared_resource.go:84: 
2025-05-11T00:30:01.7627197Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7630161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7632894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7635001Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7637375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:189
2025-05-11T00:30:01.7639853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:01.7642577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:18
2025-05-11T00:30:01.7643906Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7645085Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7645785Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:01.7646936Z         	Messages:   	Project creation failed: test-acc-tf-p-1840907866688775342, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7647796Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (0.15s)
```
### 2025-05-12
#### PASS 15 minutes
### 2025-05-13
#### PASS 14 minutes
#### PASS 11 minutes
### 2025-05-14
#### PASS 13 minutes
### 2025-05-15
#### PASS 13 minutes
### 2025-05-16
#### PASS 12 minutes
### 2025-05-17
#### PASS 11 minutes
### 2025-05-18
#### PASS 13 minutes
### 2025-05-19
#### PASS 11 minutes
### 2025-05-20
#### PASS 12 minutes
### 2025-05-21
#### PASS 11 minutes
#### PASS 13 minutes
### 2025-05-22
#### PASS 13 minutes
### 2025-05-23
#### PASS 26 minutes
### 2025-05-24
#### PASS 11 minutes
### 2025-05-25
#### PASS 15 minutes
### 2025-05-26
#### PASS 11 minutes
### 2025-05-27
#### PASS 12 minutes
### 2025-05-28
#### PASS 11 minutes
#### FAIL 3 hours
```
2025-05-28T12:04:46.9747605Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:46.9828856Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:46.9858907Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:46.9859975Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:03:41.03477567Z, ProjectID: 6836cb2fd000797dbe91f1bb, Cluster name: test-acc-tf-c-4530494852259265455
2025-05-28T12:04:46.9874774Z   
2025-05-28T12:04:47.0096295Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-28T12:04:47.0096893Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:04:47.0097328Z         
2025-05-28T12:04:47.0097571Z         Error: Error in create
2025-05-28T12:04:47.0097805Z         
2025-05-28T12:04:47.0098124Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0098766Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0099352Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0099650Z         
2025-05-28T12:04:47.0100094Z         cluster=test-acc-tf-c-4530494852259265455 didn't reach desired state: IDLE,
2025-05-28T12:04:47.0100697Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-28T12:04:47.0101115Z         'CREATING', timeout: 3h0m0s)
2025-05-28T12:04:47.0101477Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (10810.11s)
```
#### PASS 13 minutes
### 2025-05-29
#### PASS 23 minutes
### 2025-05-30
#### PASS 15 minutes
#### PASS 18 minutes
### 2025-05-31
#### PASS 14 minutes
### 2025-06-01
#### PASS 10 minutes
#### PASS 12 minutes
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 12 minutes
### 2025-06-02
#### PASS 11 minutes
#### PASS 11 minutes
#### PASS 13 minutes
#### PASS 13 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 23 seconds
```
2025-06-05T00:35:38.5802356Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.5938109Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6678988Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6679622Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:46.009851098Z, ProjectID: 6840e4c6161ca93c1f0527b5, Cluster name: test-acc-tf-c-2876772573792982698
2025-06-05T00:35:38.6682920Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest990485244 test_name=TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6683303Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6683400Z         
2025-06-05T00:35:38.6683551Z         Error: Error in create
2025-06-05T00:35:38.6683638Z         
2025-06-05T00:35:38.6683864Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6684309Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6684580Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6684673Z         
2025-06-05T00:35:38.6684986Z         cluster name: test-acc-tf-c-2876772573792982698, API error details:
2025-06-05T00:35:38.6685393Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c6161ca93c1f0527b5/clusters
2025-06-05T00:35:38.6685748Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6686039Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6686174Z         BadRequestDetail: 
2025-06-05T00:35:38.6686487Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (23.60s)
```
### 2025-06-06
#### PASS 10 minutes
### 2025-06-07
#### PASS 11 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 14 minutes
### 2025-06-10
#### PASS 18 minutes
### 2025-06-11
#### PASS 13 minutes
#### PASS 15 minutes
### 2025-06-12
#### PASS 12 minutes
### 2025-06-13
#### PASS 14 minutes
### 2025-06-14
#### PASS 12 minutes
### 2025-06-15
#### PASS 14 minutes
### 2025-06-16
#### PASS 17 minutes
### 2025-06-17
#### PASS 12 minutes
### 2025-06-18
#### PASS 13 minutes
#### PASS 13 minutes
### 2025-06-19
#### PASS 41 minutes
### 2025-06-20
#### PASS 11 minutes
### 2025-06-21
#### PASS 12 minutes
### 2025-06-22
#### PASS 14 minutes
### 2025-06-23
#### PASS 12 minutes
### 2025-06-24
#### PASS 23 minutes
### 2025-06-25
#### PASS 11 minutes
### 2025-06-26
#### PASS 16 minutes
#### PASS 10 minutes
### 2025-06-27
#### PASS 13 minutes
### 2025-06-28
#### PASS 15 minutes
### 2025-06-29
#### PASS 12 minutes
### 2025-06-30
#### PASS 12 minutes
### 2025-07-01
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 13 minutes
### 2025-07-02
#### PASS 13 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 17 minutes
### 2025-07-05
#### PASS 14 minutes
### 2025-07-06
#### PASS 14 minutes
### 2025-07-07
#### PASS 12 minutes
### 2025-07-08
#### PASS 12 minutes
### 2025-07-09
#### PASS 13 minutes
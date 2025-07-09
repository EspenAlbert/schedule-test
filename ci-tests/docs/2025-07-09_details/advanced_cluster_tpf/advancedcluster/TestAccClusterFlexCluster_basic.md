# advanced_cluster_tpf/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 6)
Success rate: 94.87%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:30 |  | qa |  | 0.00s
2025-06-05 00:35 |  | dev |  | 3.08s
2025-06-26 01:58 | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | unknown | 83.03s
2025-06-30 01:50 | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | unknown | 83.09s
2025-07-01 08:20 | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11 | dev | real_test_failure | 85.09s
2025-07-08 02:00 | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | flaky_check | 84.02s

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
#### PASS a minute
### 2025-04-11
#### PASS a minute
### 2025-04-12
#### PASS a minute
### 2025-04-13
#### PASS a minute
### 2025-04-14
#### PASS a minute
### 2025-04-15
#### PASS a minute
### 2025-04-16
#### PASS a minute
#### PASS a minute
### 2025-04-17
#### PASS a minute
### 2025-04-18
#### PASS a minute
### 2025-04-19
#### PASS a minute
### 2025-04-20
#### PASS a minute
### 2025-04-21
#### PASS a minute
### 2025-04-22
#### PASS a minute
### 2025-04-23
#### PASS a minute
### 2025-04-24
#### PASS a minute
### 2025-04-25
#### PASS a minute
### 2025-04-26
#### PASS a minute
### 2025-04-27
#### PASS a minute
### 2025-04-28
#### PASS a minute
### 2025-04-29
#### PASS a minute
### 2025-04-30
#### PASS a minute
### 2025-05-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-05-02
#### PASS a minute
### 2025-05-03
#### PASS a minute
### 2025-05-04
#### PASS a minute
### 2025-05-05
#### PASS a minute
### 2025-05-06
#### PASS a minute
### 2025-05-07
#### PASS a minute
### 2025-05-08
#### PASS a minute
### 2025-05-09
#### PASS a minute
### 2025-05-10
#### PASS a minute
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8167616Z === RUN   TestAccClusterFlexCluster_basic
2025-05-11T00:30:01.8168330Z     resource_advanced_cluster_test.go:3152: Creating execution project: test-acc-tf-p-2058233558659524543
2025-05-11T00:30:01.8168870Z     resource_advanced_cluster_test.go:3152: 
2025-05-11T00:30:01.8170034Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8172163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:01.8174502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:3152
2025-05-11T00:30:01.8175436Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8176692Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8177341Z         	Test:       	TestAccClusterFlexCluster_basic
2025-05-11T00:30:01.8178477Z         	Messages:   	Project creation failed: test-acc-tf-p-2058233558659524543, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8179269Z --- FAIL: TestAccClusterFlexCluster_basic (0.02s)
```
### 2025-05-12
#### PASS a minute
### 2025-05-13
#### PASS a minute
#### PASS a minute
### 2025-05-14
#### PASS a minute
### 2025-05-15
#### PASS a minute
### 2025-05-16
#### PASS a minute
### 2025-05-17
#### PASS a minute
### 2025-05-18
#### PASS a minute
### 2025-05-19
#### PASS a minute
### 2025-05-20
#### PASS a minute
### 2025-05-21
#### PASS a minute
#### PASS a minute
### 2025-05-22
#### PASS a minute
### 2025-05-23
#### PASS a minute
### 2025-05-24
#### PASS a minute
### 2025-05-25
#### PASS a minute
### 2025-05-26
#### PASS a minute
### 2025-05-27
#### PASS a minute
### 2025-05-28
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-05-29
#### PASS a minute
### 2025-05-30
#### PASS a minute
#### PASS a minute
### 2025-05-31
#### PASS a minute
### 2025-06-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-06-02
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-06-03
#### PASS a minute
### 2025-06-04
#### PASS a minute
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:35:38.5918013Z === RUN   TestAccClusterFlexCluster_basic
2025-06-05T00:35:38.5918821Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-3582784619729814730
2025-06-05T00:35:38.5930689Z    test_name=TestAccClusterFlexCluster_basic test_step_number=1 test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest3520287176
2025-06-05T00:35:38.5931760Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.5932175Z         
2025-06-05T00:35:38.5932855Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-5388595669844600595 (project_id=6840e4e2161ca93c1f0534c7).
2025-06-05T00:35:38.5933368Z         
2025-06-05T00:35:38.5933695Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.5934337Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.5934924Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.5935235Z         
2025-06-05T00:35:38.5935774Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4e2161ca93c1f0534c7/flexClusters
2025-06-05T00:35:38.5936481Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.5937066Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.5937454Z         BadRequestDetail: 
2025-06-05T00:35:38.5937744Z --- FAIL: TestAccClusterFlexCluster_basic (3.79s)
```
### 2025-06-06
#### PASS 2 minutes
### 2025-06-07
#### PASS a minute
### 2025-06-08
#### PASS a minute
### 2025-06-09
#### PASS a minute
### 2025-06-10
#### PASS a minute
### 2025-06-11
#### PASS a minute
#### PASS a minute
### 2025-06-12
#### PASS a minute
### 2025-06-13
#### PASS 2 minutes
### 2025-06-14
#### PASS 2 minutes
### 2025-06-15
#### PASS 2 minutes
### 2025-06-16
#### PASS 2 minutes
### 2025-06-17
#### PASS a minute
### 2025-06-18
#### PASS a minute
#### PASS 2 minutes
### 2025-06-19
#### PASS 2 minutes
### 2025-06-20
#### PASS 2 minutes
### 2025-06-21
#### PASS a minute
### 2025-06-22
#### PASS 2 minutes
### 2025-06-23
#### PASS a minute
### 2025-06-24
#### PASS a minute
### 2025-06-25
#### PASS a minute
### 2025-06-26
#### FAIL a minute
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-26T01:58:04.802000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='13 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-06-26T01:58:04.8020451Z === RUN   TestAccClusterFlexCluster_basic
2025-06-26T01:58:04.8021138Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1017685806915954258
2025-06-26T01:58:04.8029793Z    test_working_directory=/tmp/plugintest3210055494 test_step_number=1 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/a45f8172-88a7-4512-89d0-cb843141c08b/terraform
2025-06-26T01:58:04.8031198Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-26T01:58:04.8032441Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-26T01:58:04.8033389Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-26T01:58:04.8034350Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-26T01:58:04.8035363Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-26T01:58:04.8036417Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-06-26T01:58:04.8037516Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-26T01:58:04.8038489Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-26T01:58:04.8039062Z --- FAIL: TestAccClusterFlexCluster_basic (83.33s)
```
#### PASS a minute
### 2025-06-27
#### PASS a minute
### 2025-06-28
#### PASS a minute
### 2025-06-29
#### PASS 2 minutes
### 2025-06-30
#### FAIL a minute
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-06-30T01:50:25.782000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='8 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-06-30T01:50:25.7826488Z === RUN   TestAccClusterFlexCluster_basic
2025-06-30T01:50:25.7827184Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-1628083154385950105
2025-06-30T01:50:25.7836213Z    test_name=TestAccClusterFlexCluster_basic test_working_directory=/tmp/plugintest627459798
2025-06-30T01:50:25.7837287Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-30T01:50:25.7838421Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-30T01:50:25.7839373Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-30T01:50:25.7840339Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-06-30T01:50:25.7841355Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-30T01:50:25.7842413Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-06-30T01:50:25.7843507Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-06-30T01:50:25.7844487Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-06-30T01:50:25.7845276Z --- FAIL: TestAccClusterFlexCluster_basic (83.91s)
```
### 2025-07-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### FAIL a minute
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T08:20:46.774000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='7 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11
```
2025-07-01T08:20:46.7745269Z === RUN   TestAccClusterFlexCluster_basic
2025-07-01T08:20:46.7745847Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-6429725285775341751
2025-07-01T08:20:46.7749720Z    test_name=TestAccClusterFlexCluster_basic test_working_directory=/tmp/plugintest22775248 test_step_number=1
2025-07-01T08:20:46.7750834Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:20:46.7753120Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-01T08:20:46.7753690Z --- FAIL: TestAccClusterFlexCluster_basic (85.92s)
```
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### PASS a minute
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### PASS a minute
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### FAIL a minute
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-08T02:00:19.279000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='a day ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-08T02:00:19.2793517Z === RUN   TestAccClusterFlexCluster_basic
2025-07-08T02:00:19.2794095Z     resource_advanced_cluster_test.go:3273: Creating execution project: test-acc-tf-p-2244068737802333665
2025-07-08T02:00:19.2802730Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/e7f81ebf-5722-4b8f-a32c-55cda675ccba/terraform test_working_directory=/tmp/plugintest1385279846 test_step_number=1
2025-07-08T02:00:19.2804144Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T02:00:19.2805288Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-08T02:00:19.2806232Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T02:00:19.2807199Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-07-08T02:00:19.2808216Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-08T02:00:19.2809276Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-07-08T02:00:19.2810363Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T02:00:19.2811335Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-08T02:00:19.2812053Z --- FAIL: TestAccClusterFlexCluster_basic (84.23s)
```
### 2025-07-09
#### PASS a minute
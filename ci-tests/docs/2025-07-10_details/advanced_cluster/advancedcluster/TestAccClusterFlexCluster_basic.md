# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 108) FAIL(x 7)
Success rate: 93.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030110000) |  | qa |  | 0.01s
[2025-06-05 00:35](#error-2025-06-05t0035420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4ce161ca93c1f052c81/flexClusters | dev | flaky_500 | 0.08s
[2025-07-01 03:59](#error-2025-07-01t0359390000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | real_test_failure | 40.10s
[2025-07-01 06:57](#error-2025-07-01t0657380000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | real_test_failure | 40.09s
[2025-07-05 00:56](#error-2025-07-05t0056170000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 50.08s
[2025-07-07 01:01](#error-2025-07-07t0101360000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,52,66 | dev |  | 41.06s
[2025-07-08 00:59](#error-2025-07-08t0059290000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | flaky_check | 51.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS a minute
- 2025-04-13 PASS a minute
- 2025-04-14 PASS a minute
- 2025-04-15 PASS a minute
- 2025-04-16
  - PASS 58 seconds
  - PASS 58 seconds
- 2025-04-17 PASS a minute
- 2025-04-18 PASS a minute
- 2025-04-19 PASS 58 seconds
- 2025-04-20 PASS 57 seconds
- 2025-04-21 PASS 58 seconds
- 2025-04-22 PASS a minute
- 2025-04-23 PASS a minute
- 2025-04-24 PASS a minute
- 2025-04-25 PASS a minute
- 2025-04-26 PASS 58 seconds
- 2025-04-27 PASS a minute
- 2025-04-28 PASS 57 seconds
- 2025-04-29 PASS 58 seconds
- 2025-04-30 PASS 59 seconds
- 2025-05-01
  - PASS a minute
  - PASS 58 seconds
  - PASS a minute
  - PASS 59 seconds
  - PASS 59 seconds
  - PASS a minute
  - PASS a minute
- 2025-05-02 PASS 57 seconds
- 2025-05-03 PASS 59 seconds
- 2025-05-04 PASS 59 seconds
- 2025-05-05 PASS 58 seconds
- 2025-05-06 PASS a minute
- 2025-05-07 PASS 58 seconds
- 2025-05-08 PASS a minute
- 2025-05-09 PASS 58 seconds
- 2025-05-10 PASS 58 seconds
- 2025-05-11

### Error 2025-05-11T00:30:11+00:00
```
2025-05-11T00:30:11.3118334Z === RUN   TestAccClusterFlexCluster_basic
2025-05-11T00:30:11.3118917Z     resource_advanced_cluster_test.go:3152: Creating execution project: test-acc-tf-p-7749246715049041568
2025-05-11T00:30:11.3715659Z     resource_advanced_cluster_test.go:3152: 
2025-05-11T00:30:11.3718160Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:11.3722142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:11.3727131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:3152
2025-05-11T00:30:11.3728734Z         	Error:      	Received unexpected error:
2025-05-11T00:30:11.3730358Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:11.3731537Z         	Test:       	TestAccClusterFlexCluster_basic
2025-05-11T00:30:11.3733397Z         	Messages:   	Project creation failed: test-acc-tf-p-7749246715049041568, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:11.3734650Z --- FAIL: TestAccClusterFlexCluster_basic (0.06s)
```

- 2025-05-12 PASS 59 seconds
- 2025-05-13
  - PASS a minute
  - PASS a minute
- 2025-05-14 PASS 58 seconds
- 2025-05-15 PASS a minute
- 2025-05-16 PASS 58 seconds
- 2025-05-17 PASS a minute
- 2025-05-18 PASS a minute
- 2025-05-19 PASS a minute
- 2025-05-20 PASS a minute
- 2025-05-21 PASS 59 seconds
- 2025-05-22 PASS a minute
- 2025-05-23 PASS a minute
- 2025-05-24 PASS 59 seconds
- 2025-05-25 PASS 59 seconds
- 2025-05-26 PASS a minute
- 2025-05-27 PASS a minute
- 2025-05-28
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-05-29
  - PASS a minute
  - PASS a minute
- 2025-05-30
  - PASS 58 seconds
  - PASS 59 seconds
- 2025-05-31 PASS 58 seconds
- 2025-06-01
  - PASS a minute
  - PASS 58 seconds
  - PASS a minute
  - PASS a minute
  - PASS 58 seconds
  - PASS a minute
- 2025-06-02
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-03 PASS 59 seconds
- 2025-06-04 PASS a minute
- 2025-06-05

### Error 2025-06-05T00:35:42+00:00
```
2025-06-05T00:35:42.0094745Z === RUN   TestAccClusterFlexCluster_basic
2025-06-05T00:35:42.7671603Z   
2025-06-05T00:35:42.7674166Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:42.7674858Z         
2025-06-05T00:35:42.7677641Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ce161ca93c1f052c81/flexClusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:42.7678877Z         
2025-06-05T00:35:42.7679214Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:42.7679875Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:42.7680468Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:42.7702824Z         
2025-06-05T00:35:42.8152025Z --- FAIL: TestAccClusterFlexCluster_basic (0.81s)
```

- 2025-06-06 PASS 3 minutes
- 2025-06-07 PASS 58 seconds
- 2025-06-08 PASS 58 seconds
- 2025-06-09 PASS 59 seconds
- 2025-06-10 PASS a minute
- 2025-06-11
  - PASS a minute
  - PASS a minute
- 2025-06-12 PASS a minute
- 2025-06-13 PASS a minute
- 2025-06-14 PASS 2 minutes
- 2025-06-15 PASS a minute
- 2025-06-16 PASS a minute
- 2025-06-17 PASS a minute
- 2025-06-18
  - PASS a minute
  - PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS a minute
- 2025-06-21 PASS a minute
- 2025-06-22 PASS a minute
- 2025-06-23 PASS a minute
- 2025-06-24 PASS a minute
- 2025-06-25 PASS a minute
- 2025-06-26 PASS 59 seconds
- 2025-06-27 PASS 59 seconds
- 2025-06-28 PASS 48 seconds
- 2025-06-29 PASS a minute
- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - FAIL 40 seconds

### Error 2025-07-01T03:59:39+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T03:59:39.845000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='8 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-01T03:59:39.8450690Z === RUN   TestAccClusterFlexCluster_basic
2025-07-01T03:59:50.6774525Z   
2025-07-01T03:59:50.6775948Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-01T03:59:50.6777815Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-01T03:59:50.6779242Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-01T03:59:50.6780441Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-01T03:59:50.6781787Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-01T03:59:50.6782846Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-01T03:59:50.6784601Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T03:59:50.6786344Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T04:00:20.8354953Z --- FAIL: TestAccClusterFlexCluster_basic (40.99s)
```

  - PASS a minute
  - FAIL 40 seconds

### Error 2025-07-01T06:57:38+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-01T06:57:38.420000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='8 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-01T06:57:38.4208477Z === RUN   TestAccClusterFlexCluster_basic
2025-07-01T06:57:49.2676124Z   
2025-07-01T06:57:49.2676980Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-01T06:57:49.2678195Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-01T06:57:49.2679176Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-01T06:57:49.2680390Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-01T06:57:49.2681473Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-01T06:57:49.2682792Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-01T06:57:49.2683785Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T06:57:49.2684763Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T06:58:19.3738522Z --- FAIL: TestAccClusterFlexCluster_basic (40.95s)
```

- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05

### Error 2025-07-05T00:56:17+00:00
```
2025-07-05T00:56:17.8046039Z === RUN   TestAccClusterFlexCluster_basic
2025-07-05T00:56:38.4685296Z   
2025-07-05T00:56:38.4686504Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-05T00:56:38.4687673Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-05T00:56:38.4688636Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-05T00:56:38.4689607Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-05T00:56:38.4690980Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-05T00:56:38.4692057Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-05T00:56:38.4693018Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-05T00:56:38.4693965Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-05T00:57:08.5661059Z --- FAIL: TestAccClusterFlexCluster_basic (50.76s)
```

- 2025-07-06 PASS a minute
- 2025-07-07

### Error 2025-07-07T01:01:36+00:00
```
2025-07-07T01:01:36.2321744Z === RUN   TestAccClusterFlexCluster_basic
2025-07-07T01:01:47.3678167Z    test_step_number=1 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/a9abdc25-77fa-4537-b3de-dbc49e28950c/terraform test_working_directory=/tmp/plugintest2465621867
2025-07-07T01:01:47.3680146Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-07T01:01:47.3682257Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-07T01:01:47.3683704Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-07T01:01:47.3685163Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-07T01:02:17.8406048Z --- FAIL: TestAccClusterFlexCluster_basic (41.61s)
```

- 2025-07-08

### Error 2025-07-08T00:59:29+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-08T00:59:29.904000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='2 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-07-08T00:59:29.0904105Z === RUN   TestAccClusterFlexCluster_basic
2025-07-08T00:59:40.2962918Z   
2025-07-08T00:59:40.2964045Z     resource_advanced_cluster_test.go:3276: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-08T00:59:40.2965291Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-08T00:59:40.2966290Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-07-08T00:59:40.2967512Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-07-08T00:59:40.2968560Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-07-08T00:59:40.2969654Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-07-08T00:59:40.2970645Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-08T00:59:40.2971862Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-08T01:00:20.8810067Z --- FAIL: TestAccClusterFlexCluster_basic (51.79s)
```

- 2025-07-09 PASS 50 seconds
- 2025-07-10 PASS a minute
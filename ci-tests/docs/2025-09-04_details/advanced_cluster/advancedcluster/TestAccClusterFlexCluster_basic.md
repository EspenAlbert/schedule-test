# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 23) FAIL(x 13)
Success rate: 63.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-08 00:31](#error-2025-08-08t0031180000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev | flaky_check | 41.01s
[2025-08-09 00:29](#error-2025-08-09t0029070000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 50.09s
[2025-08-11 00:32](#error-2025-08-11t0032420000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 51.02s
[2025-08-12 00:28](#error-2025-08-12t0028590000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,52,66 | dev |  | 43.07s
[2025-08-12 08:07](#error-2025-08-12t0807370000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 51.08s
[2025-08-14 00:29](#error-2025-08-14t0029240000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 53.05s
[2025-08-19 00:29](#error-2025-08-19t0029030000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 40.10s
[2025-08-20 00:27](#error-2025-08-20t0027370000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 51.02s
[2025-08-21 00:27](#error-2025-08-21t0027340000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 41.05s
[2025-08-30 00:26](#error-2025-08-30t0026440000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 51.02s
[2025-09-01 00:30](#error-2025-09-01t0030440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558500000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 2531.07s
[2025-09-01 12:23](#error-2025-09-01t1223250000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 51.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08

### Error 2025-08-08T00:31:18+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-08-08T00:31:18.194000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='27 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66
```
2025-08-08T00:31:18.1946421Z === RUN   TestAccClusterFlexCluster_basic
2025-08-08T00:31:29.1774083Z    test_step_number=1
2025-08-08T00:31:29.1775137Z     resource_advanced_cluster_test.go:3254: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-08T00:31:29.1776493Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-08T00:31:29.1777506Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-08T00:31:29.1778526Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-08T00:31:29.1779603Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-08T00:31:29.1781071Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-08T00:31:29.1782090Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-08T00:31:29.1783095Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-08T00:31:59.3100482Z --- FAIL: TestAccClusterFlexCluster_basic (41.12s)
```

- 2025-08-09

### Error 2025-08-09T00:29:07+00:00
```
2025-08-09T00:29:07.3964002Z === RUN   TestAccClusterFlexCluster_basic
2025-08-09T00:29:18.1493536Z    test_step_number=1 test_working_directory=/tmp/plugintest346929975 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/629b98a5-3243-4292-bf57-3b1de8060bd5/terraform
2025-08-09T00:29:18.1495499Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-09T00:29:18.1496769Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-09T00:29:18.1497743Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-09T00:29:18.1498714Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-09T00:29:18.1499738Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-09T00:29:18.1500802Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-09T00:29:18.1502004Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-09T00:29:18.1503181Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-09T00:29:58.3065403Z --- FAIL: TestAccClusterFlexCluster_basic (50.91s)
```

- 2025-08-10 PASS 49 seconds
- 2025-08-11

### Error 2025-08-11T00:32:42+00:00
```
2025-08-11T00:32:42.2063468Z === RUN   TestAccClusterFlexCluster_basic
2025-08-11T00:32:53.1661627Z    test_working_directory=/tmp/plugintest1620323091 test_name=TestAccClusterFlexCluster_basic
2025-08-11T00:32:53.1663033Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-11T00:32:53.1664430Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-11T00:32:53.1665498Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-11T00:32:53.1666589Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-11T00:32:53.1667979Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-11T00:32:53.1669157Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-11T00:32:53.1670524Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-11T00:32:53.1671570Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-11T00:33:33.3873835Z --- FAIL: TestAccClusterFlexCluster_basic (51.18s)
```

- 2025-08-12
  - FAIL 43 seconds

### Error 2025-08-12T00:28:59+00:00
```
2025-08-12T00:28:59.3891506Z === RUN   TestAccClusterFlexCluster_basic
2025-08-12T00:29:11.6668283Z   
2025-08-12T00:29:11.6669896Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-12T00:29:11.6672516Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-12T00:29:11.6674668Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-12T00:29:11.6676825Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-12T00:29:43.0737422Z --- FAIL: TestAccClusterFlexCluster_basic (43.68s)
```

  - FAIL 51 seconds

### Error 2025-08-12T08:07:37+00:00
```
2025-08-12T08:07:37.6842046Z === RUN   TestAccClusterFlexCluster_basic
2025-08-12T08:07:48.8874436Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/1070e8a3-3614-4426-af73-0807029eac14/terraform test_working_directory=/tmp/plugintest3607040398 test_step_number=1
2025-08-12T08:07:48.8876074Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-12T08:07:48.8877442Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-12T08:07:48.8878411Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-12T08:07:48.8879399Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-12T08:07:48.8880439Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-12T08:07:48.8881521Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-12T08:07:48.8882497Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-12T08:07:48.8883468Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-12T08:08:29.4305504Z --- FAIL: TestAccClusterFlexCluster_basic (51.75s)
```

- 2025-08-13 PASS 48 seconds
- 2025-08-14

### Error 2025-08-14T00:29:24+00:00
```
2025-08-14T00:29:24.9190186Z === RUN   TestAccClusterFlexCluster_basic
2025-08-14T00:29:37.0666332Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/6ed6bb8a-5c87-4267-96a4-118e18a375e3/terraform test_working_directory=/tmp/plugintest1801636879
2025-08-14T00:29:37.0668396Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-14T00:29:37.0669983Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-14T00:29:37.0671211Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-14T00:29:37.0672232Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-14T00:29:37.0673304Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-14T00:29:37.0674423Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-14T00:29:37.0675616Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-14T00:29:37.0676626Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-14T00:30:18.4000234Z --- FAIL: TestAccClusterFlexCluster_basic (53.48s)
```

- 2025-08-15: MISSING
- 2025-08-16 PASS 59 seconds
- 2025-08-17 PASS 57 seconds
- 2025-08-18 PASS 58 seconds
- 2025-08-19

### Error 2025-08-19T00:29:03+00:00
```
2025-08-19T00:29:03.1558095Z === RUN   TestAccClusterFlexCluster_basic
2025-08-19T00:29:14.0031026Z   
2025-08-19T00:29:14.0032044Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-19T00:29:14.0033315Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-19T00:29:14.0034375Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-19T00:29:14.0035406Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-19T00:29:14.0036446Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-19T00:29:14.0037765Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-19T00:29:14.0038952Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-19T00:29:14.0039916Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-19T00:29:44.1234817Z --- FAIL: TestAccClusterFlexCluster_basic (40.97s)
```

- 2025-08-20
  - FAIL 51 seconds

### Error 2025-08-20T00:27:37+00:00
```
2025-08-20T00:27:37.8207909Z === RUN   TestAccClusterFlexCluster_basic
2025-08-20T00:27:58.8941613Z    test_working_directory=/tmp/plugintest1439675451 test_step_number=1 test_name=TestAccClusterFlexCluster_basic
2025-08-20T00:27:58.8943232Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-20T00:27:58.8944531Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-20T00:27:58.8945532Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-20T00:27:58.8946636Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard_srv' expected to be set
2025-08-20T00:27:58.8947688Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-20T00:27:58.8948783Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-08-20T00:27:58.8949951Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-20T00:27:58.8950936Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-20T00:28:29.0244463Z --- FAIL: TestAccClusterFlexCluster_basic (51.20s)
```

  - PASS 58 seconds
- 2025-08-21

### Error 2025-08-21T00:27:34+00:00
```
2025-08-21T00:27:34.5604161Z === RUN   TestAccClusterFlexCluster_basic
2025-08-21T00:27:45.6812585Z    test_step_number=1 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/c6e6ff24-2805-43b7-823c-d13bd22bdc44/terraform
2025-08-21T00:27:45.6815353Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-21T00:27:45.6817309Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-21T00:27:45.6819129Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-21T00:27:45.6820431Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-21T00:27:45.6821425Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-21T00:28:16.0213284Z --- FAIL: TestAccClusterFlexCluster_basic (41.46s)
```

- 2025-08-22: MISSING
- 2025-08-23 PASS 55 seconds
- 2025-08-24 PASS 48 seconds
- 2025-08-25 PASS 58 seconds
- 2025-08-26 PASS 49 seconds
- 2025-08-27 PASS 59 seconds
- 2025-08-28 PASS 48 seconds
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T00:26:44+00:00
```
2025-08-30T00:26:44.2464569Z === RUN   TestAccClusterFlexCluster_basic
2025-08-30T00:26:55.2178369Z    test_name=TestAccClusterFlexCluster_basic
2025-08-30T00:26:55.2180599Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-30T00:26:55.2182999Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-08-30T00:26:55.2184848Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-08-30T00:26:55.2186711Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-30T00:26:55.2188454Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-30T00:27:35.4388483Z --- FAIL: TestAccClusterFlexCluster_basic (51.19s)
```

- 2025-08-31 PASS 48 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:44+00:00
```
2025-09-01T00:30:44.3761469Z === RUN   TestAccClusterFlexCluster_basic
2025-09-01T00:30:44.3762083Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-5107034513769984071
2025-09-01T00:30:44.4961714Z     resource_advanced_cluster_test.go:3278: 
2025-09-01T00:30:44.4964377Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:44.4968543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:44.4972657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:3278
2025-09-01T00:30:44.4974448Z         	Error:      	Received unexpected error:
2025-09-01T00:30:44.4980044Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.4982337Z         	Test:       	TestAccClusterFlexCluster_basic
2025-09-01T00:30:44.5032630Z         	Messages:   	Project creation failed: test-acc-tf-p-5107034513769984071, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.5108755Z --- FAIL: TestAccClusterFlexCluster_basic (0.12s)
```

  - FAIL 42 minutes

### Error 2025-09-01T05:58:50+00:00
```
2025-09-01T05:58:50.1429038Z === RUN   TestAccClusterFlexCluster_basic
2025-09-01T05:59:22.5459800Z    test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/57cf6ef5-4ae4-48f5-8742-5287ebb0ea60/terraform
2025-09-01T05:59:22.5461425Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-09-01T05:59:22.5463169Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-09-01T05:59:22.5464301Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-09-01T05:59:22.5465465Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T05:59:22.5466793Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T06:41:01.8440588Z --- FAIL: TestAccClusterFlexCluster_basic (2531.70s)
```

  - PASS a minute
  - PASS a minute
  - FAIL 51 seconds

### Error 2025-09-01T12:23:25+00:00
```
2025-09-01T12:23:25.8301234Z === RUN   TestAccClusterFlexCluster_basic
2025-09-01T12:23:36.8868587Z   
2025-09-01T12:23:36.8870268Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-09-01T12:23:36.8871473Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.0.standard' expected to be set
2025-09-01T12:23:36.8872535Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-09-01T12:23:36.8873739Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T12:23:36.8874737Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T12:24:17.2107361Z --- FAIL: TestAccClusterFlexCluster_basic (51.38s)
```

  - PASS a minute
  - PASS 49 seconds
  - PASS 49 seconds
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
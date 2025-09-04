# advanced_cluster_tpf/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-08-05 to 2025-09-04 from master branch: 1 unique tests, PASS(x 27) FAIL(x 10)
Success rate: 72.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-05 17:21](#error-2025-08-05t1721290000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 77.04s
[2025-08-09 01:40](#error-2025-08-09t0140120000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11 | dev |  | 74.03s
[2025-08-18 01:34](#error-2025-08-18t0134210000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,11,25,26,40,41,52,66 | dev |  | 67.04s
[2025-08-21 05:27](#error-2025-08-21t0527020000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 84.01s
[2025-08-24 03:34](#error-2025-08-24t0334470000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | qa |  | 69.05s
[2025-08-27 01:38](#error-2025-08-27t0138030000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev | flaky_check | 74.09s
[2025-08-30 03:28](#error-2025-08-30t0328110000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 82.09s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 11:01](#error-2025-09-01t1101140000) | CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66 | dev |  | 135.02s

## Timeline
- 2025-08-05

### Error 2025-08-05T17:21:29+00:00
```
2025-08-05T17:21:29.9536715Z === RUN   TestAccClusterFlexCluster_basic
2025-08-05T17:21:29.9537938Z     resource_advanced_cluster_test.go:3277: Creating execution project: test-acc-tf-p-5486149151184433184
2025-08-05T17:21:29.9557571Z   
2025-08-05T17:21:29.9559201Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-05T17:21:29.9561420Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-08-05T17:21:29.9563355Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-05T17:21:29.9565395Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-08-05T17:21:29.9567249Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-05T17:21:29.9569251Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-08-05T17:21:29.9571160Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-05T17:21:29.9573032Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-05T17:21:29.9574314Z --- FAIL: TestAccClusterFlexCluster_basic (77.42s)
```

- 2025-08-06 PASS a minute
- 2025-08-07 PASS 4 minutes
- 2025-08-08 PASS a minute
- 2025-08-09

### Error 2025-08-09T01:40:12+00:00
```
2025-08-09T01:40:12.0229426Z === RUN   TestAccClusterFlexCluster_basic
2025-08-09T01:40:12.0230013Z     resource_advanced_cluster_test.go:3277: Creating execution project: test-acc-tf-p-5409187540776018071
2025-08-09T01:40:12.0234406Z   
2025-08-09T01:40:12.0235224Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-09T01:40:12.0236358Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-08-09T01:40:12.0236915Z --- FAIL: TestAccClusterFlexCluster_basic (74.28s)
```

- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12
  - PASS a minute
  - PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15: MISSING
- 2025-08-16 PASS a minute
- 2025-08-17 PASS a minute
- 2025-08-18

### Error 2025-08-18T01:34:21+00:00
```
2025-08-18T01:34:21.9670372Z === RUN   TestAccClusterFlexCluster_basic
2025-08-18T01:34:21.9671002Z     resource_advanced_cluster_test.go:3277: Creating execution project: test-acc-tf-p-3874293513689298224
2025-08-18T01:34:21.9680309Z   
2025-08-18T01:34:21.9681106Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-18T01:34:21.9682236Z         Check 11/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-08-18T01:34:21.9683198Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-18T01:34:21.9684165Z         Check 26/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard_srv' expected to be set
2025-08-18T01:34:21.9685170Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-18T01:34:21.9686215Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard_srv' expected to be set
2025-08-18T01:34:21.9687177Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-18T01:34:21.9688167Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-18T01:34:21.9688743Z --- FAIL: TestAccClusterFlexCluster_basic (67.41s)
```

- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21

### Error 2025-08-21T05:27:02+00:00
```
2025-08-21T05:27:02.5641450Z === RUN   TestAccClusterFlexCluster_basic
2025-08-21T05:27:02.5642132Z     resource_advanced_cluster_test.go:3277: Creating execution project: test-acc-tf-p-4415398224397209408
2025-08-21T05:27:02.5649115Z   
2025-08-21T05:27:02.5649934Z     resource_advanced_cluster_test.go:3280: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-21T05:27:02.5651088Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-21T05:27:02.5652107Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-21T05:27:02.5653087Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-21T05:27:02.5654070Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-21T05:27:02.5654654Z --- FAIL: TestAccClusterFlexCluster_basic (84.10s)
```

- 2025-08-22: MISSING
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1437130Z === RUN   TestAccClusterFlexCluster_basic
2025-08-24T03:34:47.1438652Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-7323276145241004207
2025-08-24T03:34:47.1451147Z   
2025-08-24T03:34:47.1452644Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-24T03:34:47.1454787Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-24T03:34:47.1456697Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-24T03:34:47.1458742Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-24T03:34:47.1460606Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-24T03:34:47.1461693Z --- FAIL: TestAccClusterFlexCluster_basic (69.53s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-08-27T01:38:03.941000+00:00-TestAccClusterFlexCluster_basic',confidence=1.0,ts_when='8 days ago')
CheckFailure for advanced_cluster.test at Step: 1 Checks: 10,25,40,52,66
```
2025-08-27T01:38:03.9419983Z === RUN   TestAccClusterFlexCluster_basic
2025-08-27T01:38:03.9420662Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-5488879010233893483
2025-08-27T01:38:03.9428096Z   
2025-08-27T01:38:03.9428936Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-27T01:38:03.9430094Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-27T01:38:03.9431114Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-27T01:38:03.9432307Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-27T01:38:03.9433634Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-27T01:38:03.9434233Z --- FAIL: TestAccClusterFlexCluster_basic (74.91s)
```

- 2025-08-28 PASS a minute
- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T03:28:11+00:00
```
2025-08-30T03:28:11.7910161Z === RUN   TestAccClusterFlexCluster_basic
2025-08-30T03:28:11.7911167Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-93049238653053022
2025-08-30T03:28:11.7923171Z   
2025-08-30T03:28:11.7924648Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-30T03:28:11.7926779Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-30T03:28:11.7928648Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-30T03:28:11.7930594Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-30T03:28:11.7932355Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-30T03:28:11.7933388Z --- FAIL: TestAccClusterFlexCluster_basic (82.90s)
```

- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7537799Z === RUN   TestAccClusterFlexCluster_basic
2025-09-01T00:30:49.7538387Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-5996674321907249163
2025-09-01T00:30:49.7538911Z     resource_advanced_cluster_test.go:3278: 
2025-09-01T00:30:49.7539802Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7541622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:49.7543575Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:3278
2025-09-01T00:30:49.7544385Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7546996Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7548235Z         	Test:       	TestAccClusterFlexCluster_basic
2025-09-01T00:30:49.7550378Z         	Messages:   	Project creation failed: test-acc-tf-p-5996674321907249163, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7551952Z --- FAIL: TestAccClusterFlexCluster_basic (0.17s)
```

  - FAIL a moment

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6690715Z === RUN   TestAccClusterFlexCluster_basic
2025-09-01T07:49:13.6691301Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-6172103548427515392
2025-09-01T07:49:13.6691829Z     resource_advanced_cluster_test.go:3278: 
2025-09-01T07:49:13.6692747Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T07:49:13.6694485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T07:49:13.6696490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:3278
2025-09-01T07:49:13.6697316Z         	Error:      	Received unexpected error:
2025-09-01T07:49:13.6700144Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6701383Z         	Test:       	TestAccClusterFlexCluster_basic
2025-09-01T07:49:13.6703585Z         	Messages:   	Project creation failed: test-acc-tf-p-6172103548427515392, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6704970Z --- FAIL: TestAccClusterFlexCluster_basic (0.11s)
```

  - FAIL 2 minutes

### Error 2025-09-01T11:01:14+00:00
```
2025-09-01T11:01:14.4510133Z === RUN   TestAccClusterFlexCluster_basic
2025-09-01T11:01:14.4511172Z     resource_advanced_cluster_test.go:3278: Creating execution project: test-acc-tf-p-568390275435288800
2025-09-01T11:01:14.4522134Z    test_working_directory=/tmp/plugintest519818983 test_name=TestAccClusterFlexCluster_basic test_terraform_path=/home/runner/work/_temp/cdda43f7-022e-4c74-8701-bcfb74a40b2e/terraform
2025-09-01T11:01:14.4524570Z     resource_advanced_cluster_test.go:3281: Step 1/4 error: Check failed: Check 10/74 error: mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T11:01:14.4526611Z         Check 25/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T11:01:14.4528448Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T11:01:14.4530432Z         Check 52/74 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T11:01:14.4532197Z         Check 66/74 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T11:01:14.4533191Z --- FAIL: TestAccClusterFlexCluster_basic (135.18s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
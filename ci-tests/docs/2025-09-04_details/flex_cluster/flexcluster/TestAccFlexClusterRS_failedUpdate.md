# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 24) FAIL(x 14)
Success rate: 63.16%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-08 00:31](#error-2025-08-08t0031050000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev | real_test_failure | 50.08s
[2025-08-09 00:29](#error-2025-08-09t0029250000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 41.03s
[2025-08-11 00:32](#error-2025-08-11t0032310000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 50.07s
[2025-08-14 00:30](#error-2025-08-14t0030040000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 41.09s
[2025-08-26 00:27](#error-2025-08-26t0027560000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev |  | 42.01s
[2025-08-29 00:27](#error-2025-08-29t0027560000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 369.03s
[2025-08-31 00:30](#error-2025-08-31t0030300000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | qa |  | 34.02s
[2025-09-01 00:30](#error-2025-09-01t0030230000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558240000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev |  | 2573.08s
[2025-09-01 08:00](#error-2025-09-01t0800000000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 101.07s
[2025-09-01 12:23](#error-2025-09-01t1223490000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 61.09s
[2025-09-01 16:11](#error-2025-09-01t1611020000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev |  | 41.02s
[2025-09-02 00:27](#error-2025-09-02t0027370000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 50.10s
[2025-09-03 00:26](#error-2025-09-03t0026110000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,27,38 | dev |  | 61.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 42 seconds
- 2025-08-07 PASS a minute
- 2025-08-08

### Error 2025-08-08T00:31:05+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-08T00:31:05.533000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='27 days ago')
CheckFailure for flex_clusters.test at Step: 1 Checks: 38
```
2025-08-08T00:31:05.5330331Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-08T00:31:16.0162273Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-08-08T00:31:56.3006925Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.77s)
```

- 2025-08-09

### Error 2025-08-09T00:29:25+00:00
```
2025-08-09T00:29:25.6595961Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-09T00:29:36.4715458Z   
2025-08-09T00:29:36.4717270Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-09T00:29:36.4719242Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-09T00:29:36.4721084Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-09T00:30:06.9232307Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.26s)
```

- 2025-08-10 PASS 41 seconds
- 2025-08-11

### Error 2025-08-11T00:32:31+00:00
```
2025-08-11T00:32:31.1224368Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-11T00:32:51.6723872Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-08-11T00:33:21.8225237Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.70s)
```

- 2025-08-12 PASS 52 seconds
- 2025-08-13 PASS a minute
- 2025-08-14

### Error 2025-08-14T00:30:04+00:00
```
2025-08-14T00:30:04.0998330Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-14T00:30:15.2377257Z    test_name=TestAccFlexClusterRS_failedUpdate test_terraform_path=/home/runner/work/_temp/ccb07066-1548-4e36-abe6-6af39a1e4d7e/terraform test_working_directory=/tmp/plugintest2781157886
2025-08-14T00:30:15.2390266Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-14T00:30:15.2391989Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-14T00:30:15.2394163Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-14T00:30:46.0498826Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.95s)
```

- 2025-08-15 PASS 41 seconds
- 2025-08-16 PASS 51 seconds
- 2025-08-17 PASS 51 seconds
- 2025-08-18 PASS 51 seconds
- 2025-08-19 PASS 44 seconds
- 2025-08-20
  - PASS 42 seconds
  - PASS 54 seconds
- 2025-08-21 PASS 44 seconds
- 2025-08-22 PASS 51 seconds
- 2025-08-23 PASS 53 seconds
- 2025-08-24 PASS 42 seconds
- 2025-08-25 PASS 53 seconds
- 2025-08-26

### Error 2025-08-26T00:27:56+00:00
```
2025-08-26T00:27:56.9580144Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-26T00:28:08.1843013Z    test_terraform_path=/home/runner/work/_temp/b50b2c86-ca4d-4ed1-88f0-d2c8d9dd89c8/terraform test_name=TestAccFlexClusterRS_failedUpdate test_working_directory=/tmp/plugintest2619021340
2025-08-26T00:28:08.1845810Z     resource_test.go:26: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-4109426590674273055", got "test-acc-tf-1871979398320503595"
2025-08-26T00:28:08.1847417Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-08-26T00:28:08.1848715Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-08-26T00:28:39.0965827Z --- FAIL: TestAccFlexClusterRS_failedUpdate (42.14s)
```

- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 52 seconds
- 2025-08-29

### Error 2025-08-29T00:27:56+00:00
```
2025-08-29T00:27:56.3868052Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-29T00:28:17.7691219Z     resource_test.go:27: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-08-29T00:34:05.7095586Z --- FAIL: TestAccFlexClusterRS_failedUpdate (369.32s)
```

- 2025-08-30 PASS 42 seconds
- 2025-08-31

### Error 2025-08-31T00:30:30+00:00
```
2025-08-31T00:30:30.3106464Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-08-31T00:30:34.5200683Z   
2025-08-31T00:30:34.5202200Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-31T00:30:34.5204257Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-31T00:30:34.5205695Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-31T00:31:04.4836262Z --- FAIL: TestAccFlexClusterRS_failedUpdate (34.17s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:23+00:00
```
2025-09-01T00:30:23.0124818Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-01T00:30:23.0125837Z     resource_test.go:25: Creating execution project: test-acc-tf-p-4491898863901530146
2025-09-01T00:30:23.1119112Z     resource_test.go:25: 
2025-09-01T00:30:23.1120562Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:23.1123645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:23.1126405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:64
2025-09-01T00:30:23.1128656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2025-09-01T00:30:23.1129574Z         	Error:      	Received unexpected error:
2025-09-01T00:30:23.1132947Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:23.1134548Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2025-09-01T00:30:23.1137001Z         	Messages:   	Project creation failed: test-acc-tf-p-4491898863901530146, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:23.1138479Z --- FAIL: TestAccFlexClusterRS_failedUpdate (0.10s)
```

  - FAIL 42 minutes

### Error 2025-09-01T05:58:24+00:00
```
2025-09-01T05:58:24.4808085Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-01T05:58:34.7345096Z   
2025-09-01T05:58:34.7346930Z     resource_test.go:26: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-8045720150772949393", got "test-acc-tf-8298639980457585211"
2025-09-01T05:58:34.7349344Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-09-01T05:58:34.7350298Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-09-01T06:41:18.3234174Z --- FAIL: TestAccFlexClusterRS_failedUpdate (2573.84s)
```

  - FAIL a minute

### Error 2025-09-01T08:00:00+00:00
```
2025-09-01T08:00:00.4112270Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-01T08:00:21.2624822Z    test_name=TestAccFlexClusterRS_failedUpdate test_terraform_path=/home/runner/work/_temp/cdaa8c75-e70e-4fb3-a7eb-72abb8a18696/terraform test_working_directory=/tmp/plugintest3147692525 test_step_number=1
2025-09-01T08:00:21.2628920Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T08:00:21.2631001Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T08:00:21.2632815Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T08:01:42.1508148Z --- FAIL: TestAccFlexClusterRS_failedUpdate (101.74s)
```

  - PASS 41 seconds
  - FAIL a minute

### Error 2025-09-01T12:23:49+00:00
```
2025-09-01T12:23:49.8306243Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-01T12:24:00.8831785Z   
2025-09-01T12:24:00.8832941Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T12:24:00.8834972Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T12:24:00.8836996Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T12:24:51.7259063Z --- FAIL: TestAccFlexClusterRS_failedUpdate (61.90s)
```

  - PASS a minute
  - PASS 53 seconds
  - FAIL 41 seconds

### Error 2025-09-01T16:11:02+00:00
```
2025-09-01T16:11:02.0510160Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-01T16:11:12.7380702Z    test_terraform_path=/home/runner/work/_temp/44cd000f-5542-4f08-929b-6970bd4f15e8/terraform test_working_directory=/tmp/plugintest488743833 test_step_number=1 test_name=TestAccFlexClusterRS_failedUpdate
2025-09-01T16:11:12.7383822Z     resource_test.go:26: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-3734862794784946643", got "test-acc-tf-6347693147542942912"
2025-09-01T16:11:12.7385716Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-09-01T16:11:12.7386953Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-09-01T16:11:43.2698926Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.22s)
```

- 2025-09-02

### Error 2025-09-02T00:27:37+00:00
```
2025-09-02T00:27:37.9496520Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-02T00:27:58.6546303Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-09-02T00:28:28.9374284Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.99s)
```

- 2025-09-03

### Error 2025-09-03T00:26:11+00:00
```
2025-09-03T00:26:11.1653020Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-03T00:26:22.0144304Z    test_terraform_path=/home/runner/work/_temp/dca41637-96a6-4f7f-b1d1-c9419edc4d14/terraform test_working_directory=/tmp/plugintest3832590123 test_step_number=1
2025-09-03T00:26:22.0146271Z     resource_test.go:26: Step 1/5 error: Check failed: Check 25/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-09-03T00:26:22.0148623Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-2799156500730089887", got "test-acc-tf-5056861727582132851"
2025-09-03T00:26:22.0150101Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-09-03T00:27:12.6548179Z --- FAIL: TestAccFlexClusterRS_failedUpdate (61.49s)
```

- 2025-09-04 PASS 44 seconds
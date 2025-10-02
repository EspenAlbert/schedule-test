# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 12)
Success rate: 71.43%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-03 00:26](#error-2025-09-03t0026110000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,27,38 | dev | 61.05s
[2025-09-08 12:05](#error-2025-09-08t1205370000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 41.07s
[2025-09-09 00:28](#error-2025-09-09t0028100000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 40.07s
[2025-09-10 00:27](#error-2025-09-10t0027210000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev | 40.03s
[2025-09-17 00:28](#error-2025-09-17t0028030000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 45.03s
[2025-09-20 00:26](#error-2025-09-20t0026580000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 43.04s
[2025-09-23 00:28](#error-2025-09-23t0028180000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 54.02s
[2025-10-01 00:28](#error-2025-10-01t0028320000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev | 51.06s
[2025-10-01 04:55](#error-2025-10-01t0455120000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev | 41.08s
[2025-10-01 07:29](#error-2025-10-01t0729090000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 53.03s
[2025-10-01 09:10](#error-2025-10-01t0910360000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 53.04s
[2025-10-01 11:49](#error-2025-10-01t1149210000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 41.02s

## Timeline
- 2025-09-02: MISSING
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
- 2025-09-05 PASS 45 seconds
- 2025-09-06 PASS a minute
- 2025-09-07 PASS 41 seconds
- 2025-09-08
  - PASS 42 seconds
  - PASS 43 seconds
  - FAIL 41 seconds

### Error 2025-09-08T12:05:37+00:00
```
2025-09-08T12:05:37.2427141Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-08T12:05:48.2175024Z    test_working_directory=/tmp/plugintest2295895646
2025-09-08T12:05:48.2176659Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-08T12:05:48.2178871Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-08T12:05:48.2180315Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-08T12:06:18.9232895Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.68s)
```

- 2025-09-09

### Error 2025-09-09T00:28:10+00:00
```
2025-09-09T00:28:10.9503741Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-09T00:28:21.4251626Z   
2025-09-09T00:28:21.4254947Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-09T00:28:21.4256284Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-09T00:28:21.4257798Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-09T00:28:51.6951505Z --- FAIL: TestAccFlexClusterRS_failedUpdate (40.74s)
```

- 2025-09-10

### Error 2025-09-10T00:27:21+00:00
```
2025-09-10T00:27:21.7933080Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-10T00:27:32.0684162Z     resource_test.go:27: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-09-10T00:28:02.0645502Z --- FAIL: TestAccFlexClusterRS_failedUpdate (40.27s)
```

- 2025-09-11 PASS 51 seconds
- 2025-09-12 PASS 54 seconds
- 2025-09-13 PASS 55 seconds
- 2025-09-14 PASS 42 seconds
- 2025-09-15
  - PASS 54 seconds
  - PASS 41 seconds
- 2025-09-16 PASS 42 seconds
- 2025-09-17

### Error 2025-09-17T00:28:03+00:00
```
2025-09-17T00:28:03.2544434Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-17T00:28:07.8613606Z    test_terraform_path=/home/runner/work/_temp/cd646e61-efe4-4397-83fc-a81c92d4beb9/terraform test_step_number=1
2025-09-17T00:28:07.8614900Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-17T00:28:07.8616234Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-17T00:28:07.8617916Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-17T00:28:48.6030470Z --- FAIL: TestAccFlexClusterRS_failedUpdate (45.35s)
```

- 2025-09-18 PASS a minute
- 2025-09-19 PASS 52 seconds
- 2025-09-20

### Error 2025-09-20T00:26:58+00:00
```
2025-09-20T00:26:58.2068414Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-20T00:27:09.4471869Z   
2025-09-20T00:27:09.4474706Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-20T00:27:09.4476478Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-20T00:27:09.4478578Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-20T00:27:41.5656441Z --- FAIL: TestAccFlexClusterRS_failedUpdate (43.36s)
```

- 2025-09-21 PASS 41 seconds
- 2025-09-22 PASS 42 seconds
- 2025-09-23

### Error 2025-09-23T00:28:18+00:00
```
2025-09-23T00:28:18.3901667Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-23T00:28:29.8431554Z    test_terraform_path=/home/runner/work/_temp/3a10b76c-b76f-4ead-a2e5-ec2ea36ed0db/terraform test_name=TestAccFlexClusterRS_failedUpdate
2025-09-23T00:28:29.8433880Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-23T00:28:29.8435921Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-23T00:28:29.8437698Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-23T00:29:12.6378169Z --- FAIL: TestAccFlexClusterRS_failedUpdate (54.25s)
```

- 2025-09-24 PASS a minute
- 2025-09-25 PASS 45 seconds
- 2025-09-26 PASS 53 seconds
- 2025-09-27 PASS 52 seconds
- 2025-09-28 PASS a minute
- 2025-09-29 PASS 55 seconds
- 2025-09-30
  - PASS 43 seconds
  - PASS 45 seconds
  - PASS 55 seconds
- 2025-10-01
  - FAIL 51 seconds

### Error 2025-10-01T00:28:32+00:00
```
2025-10-01T00:28:32.3375800Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T00:28:42.6488840Z   
2025-10-01T00:28:42.6490610Z     resource_test.go:27: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-6791262378077496484", got "test-acc-tf-7968022917237464223"
2025-10-01T00:28:42.6493004Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-10-01T00:28:42.6494640Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-10-01T00:29:23.9066283Z --- FAIL: TestAccFlexClusterRS_failedUpdate (51.57s)
```

  - PASS 44 seconds
  - FAIL 41 seconds

### Error 2025-10-01T04:55:12+00:00
```
2025-10-01T04:55:12.6195792Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T04:55:23.2168780Z   
2025-10-01T04:55:23.2170169Z     resource_test.go:27: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-2048309513682489968", got "test-acc-tf-4910701523154029188"
2025-10-01T04:55:23.2171863Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-10-01T04:55:23.2173183Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-10-01T04:55:54.4353448Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.82s)
```

  - FAIL 53 seconds

### Error 2025-10-01T07:29:09+00:00
```
2025-10-01T07:29:09.8163728Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T07:29:20.8906032Z   
2025-10-01T07:29:20.8907442Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T07:29:20.8909579Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T07:29:20.8911503Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T07:30:03.1071875Z --- FAIL: TestAccFlexClusterRS_failedUpdate (53.29s)
```

  - FAIL 53 seconds

### Error 2025-10-01T09:10:36+00:00
```
2025-10-01T09:10:36.5453351Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T09:10:47.5741114Z    test_name=TestAccFlexClusterRS_failedUpdate test_terraform_path=/home/runner/work/_temp/072d2d98-cce6-4a5f-a15a-53050e843c89/terraform test_step_number=1
2025-10-01T09:10:47.5744570Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T09:10:47.5746369Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T09:10:47.5748245Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T09:11:29.9100398Z --- FAIL: TestAccFlexClusterRS_failedUpdate (53.36s)
```

  - PASS 43 seconds
  - FAIL 41 seconds

### Error 2025-10-01T11:49:21+00:00
```
2025-10-01T11:49:21.1209989Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T11:49:31.4818625Z    test_step_number=1 test_name=TestAccFlexClusterRS_failedUpdate test_terraform_path=/home/runner/work/_temp/05e6d89f-f8fa-4dbf-97d4-01857aa349a7/terraform test_working_directory=/tmp/plugintest3720859401
2025-10-01T11:49:31.4822976Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T11:49:31.4824939Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T11:49:31.4826522Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T11:50:02.3053263Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.18s)
```

  - PASS 44 seconds
- 2025-10-02 PASS 55 seconds
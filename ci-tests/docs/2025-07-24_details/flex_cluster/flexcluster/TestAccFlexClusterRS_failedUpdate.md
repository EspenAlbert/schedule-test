# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 11) TIMEOUT
Success rate: 69.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 00:30](#error-2025-07-01t0030130000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30,39 | dev | unknown | 51.01s
[2025-07-01 03:30](#error-2025-07-01t0330490000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | unknown | 42.03s
[2025-07-01 08:33](#error-2025-07-01t0833500000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30,38 | dev | flaky_check | 60.04s
[2025-07-03 00:30](#error-2025-07-03t0030390000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | unknown | 50.03s
[2025-07-04 00:29](#error-2025-07-04t0029250000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38 | dev | unknown | 42.04s
[2025-07-09 00:29](#error-2025-07-09t0029580000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev | real_test_failure | 50.05s
[2025-07-14 03:31](#error-2025-07-14t0331120000) |  | dev |  | 7197.00s
[2025-07-15 00:30](#error-2025-07-15t0030210000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,26,27,38 | dev |  | 40.04s
[2025-07-17 00:30](#error-2025-07-17t0030250000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 50.05s
[2025-07-18 00:29](#error-2025-07-18t0029530000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,26,27,38 | dev |  | 34.03s
[2025-07-20 00:33](#error-2025-07-20t0033060000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,39 | qa |  | 40.06s
[2025-07-22 07:39](#error-2025-07-22t0739330000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 52.06s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 51 seconds
- 2025-06-26 PASS 44 seconds
- 2025-06-27 PASS 43 seconds
- 2025-06-28 PASS 44 seconds
- 2025-06-29 PASS a minute
- 2025-06-30 PASS 51 seconds
- 2025-07-01
  - FAIL 51 seconds

### Error 2025-07-01T00:30:13+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-01T00:30:13.655000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='23 days ago')
CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30,39
```
2025-07-01T00:30:13.0655344Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-01T00:30:23.6788391Z    test_working_directory=/tmp/plugintest2286054931 test_step_number=1
2025-07-01T00:30:23.6789730Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T00:30:23.6791754Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T00:30:23.6792846Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T00:30:23.6793980Z         Check 39/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-01T00:31:04.1147436Z --- FAIL: TestAccFlexClusterRS_failedUpdate (51.05s)
```

  - PASS 42 seconds
  - FAIL 42 seconds

### Error 2025-07-01T03:30:49+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-01T03:30:49.618000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='23 days ago')
CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30
```
2025-07-01T03:30:49.6180133Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-01T03:31:00.9336511Z    test_step_number=1 test_name=TestAccFlexClusterRS_failedUpdate
2025-07-01T03:31:00.9340231Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T03:31:00.9342158Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T03:31:00.9344048Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T03:31:31.9289552Z --- FAIL: TestAccFlexClusterRS_failedUpdate (42.31s)
```

  - PASS 54 seconds
  - PASS 44 seconds
  - FAIL a minute

### Error 2025-07-01T08:33:50+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T08:33:50.514000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='23 days ago')
CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30,38
```
2025-07-01T08:33:50.5143650Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-01T08:34:10.8769106Z   
2025-07-01T08:34:10.8770455Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:34:10.8772344Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:34:10.8773652Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T08:34:10.8774913Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-01T08:34:50.9148594Z --- FAIL: TestAccFlexClusterRS_failedUpdate (60.40s)
```

- 2025-07-02 PASS 54 seconds
- 2025-07-03

### Error 2025-07-03T00:30:39+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-03T00:30:39.380000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='21 days ago')
CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30
```
2025-07-03T00:30:39.3809154Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-03T00:30:49.6480174Z   
2025-07-03T00:30:49.6483607Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-03T00:30:49.6485637Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-03T00:30:49.6487605Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-03T00:31:29.6571936Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.28s)
```

- 2025-07-04

### Error 2025-07-04T00:29:25+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-04T00:29:25.572000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='20 days ago')
CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38
```
2025-07-04T00:29:25.5728124Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-04T00:29:36.8709759Z   
2025-07-04T00:29:36.8711589Z     resource_test.go:26: Step 1/5 error: Check failed: Check 25/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-1451403847181752937", got "test-acc-tf-6033897913351790890"
2025-07-04T00:29:36.8714135Z         Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-07-04T00:29:36.8715354Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-04T00:30:07.9599737Z --- FAIL: TestAccFlexClusterRS_failedUpdate (42.39s)
```

- 2025-07-05 PASS 51 seconds
- 2025-07-06 PASS 51 seconds
- 2025-07-07 PASS 51 seconds
- 2025-07-08 PASS 41 seconds
- 2025-07-09

### Error 2025-07-09T00:29:58+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-09T00:29:58.730000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='15 days ago')
CheckFailure for flex_clusters.test at Step: 1 Checks: 38
```
2025-07-09T00:29:58.7301525Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-09T00:30:09.0359010Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-09T00:30:49.1924446Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.46s)
```

- 2025-07-10
  - PASS 54 seconds
  - PASS 52 seconds
- 2025-07-11 PASS 30 minutes
- 2025-07-12 PASS 51 seconds
- 2025-07-13 PASS 52 seconds
- 2025-07-14

### Error 2025-07-14T03:31:12+00:00
```
2025-07-14T03:31:12.6604411Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-14T05:31:09.1804901Z panic: test timed out after 5h0m0s
2025-07-14T05:31:09.1805560Z 	running tests:
2025-07-14T05:31:09.1804901Z panic: test timed out after 5h0m0s
2025-07-14T05:31:09.1805560Z 	running tests:
2025-07-14T05:31:09.1806154Z 		TestAccFlexClusterRS_failedUpdate (1h59m57s)
```

- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.3746002Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-15T00:30:31.7280745Z   
2025-07-15T00:30:31.7281911Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-15T00:30:31.7284574Z         Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-4688734120655774876", got "test-acc-tf-8291059729420889925"
2025-07-15T00:30:31.7286276Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-07-15T00:30:31.7287360Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-15T00:31:01.7569198Z --- FAIL: TestAccFlexClusterRS_failedUpdate (40.38s)
```

- 2025-07-16 PASS 51 seconds
- 2025-07-17

### Error 2025-07-17T00:30:25+00:00
```
2025-07-17T00:30:25.4838591Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-17T00:30:35.8782058Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-17T00:31:16.0289067Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.55s)
```

- 2025-07-18

### Error 2025-07-18T00:29:53+00:00
```
2025-07-18T00:29:53.0830733Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-18T00:29:57.3005049Z   
2025-07-18T00:29:57.3006383Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-18T00:29:57.3008407Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-18T00:29:57.3010522Z         Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-8169845135816521153", got "test-acc-tf-4428863965891622885"
2025-07-18T00:29:57.3012681Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-07-18T00:29:57.3014367Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-18T00:30:27.3427990Z --- FAIL: TestAccFlexClusterRS_failedUpdate (34.26s)
```

- 2025-07-19 PASS 52 seconds
- 2025-07-20

### Error 2025-07-20T00:33:06+00:00
```
2025-07-20T00:33:06.9991818Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-20T00:33:17.4778684Z    test_working_directory=/tmp/plugintest2555991603
2025-07-20T00:33:17.4780113Z     resource_test.go:26: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-507716412282781977", got "test-acc-tf-3579074534405682058"
2025-07-20T00:33:17.4782457Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-07-20T00:33:17.4783582Z         Check 39/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-20T00:33:47.6387856Z --- FAIL: TestAccFlexClusterRS_failedUpdate (40.64s)
```

- 2025-07-21 PASS a minute
- 2025-07-22

### Error 2025-07-22T07:39:33+00:00
```
2025-07-22T07:39:33.7814964Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-22T07:39:45.0945393Z   
2025-07-22T07:39:45.0947384Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-22T07:39:45.0949312Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-22T07:39:45.0951315Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-22T07:40:26.3850097Z --- FAIL: TestAccFlexClusterRS_failedUpdate (52.60s)
```

- 2025-07-23
  - PASS 54 seconds
  - PASS 43 seconds
- 2025-07-24 PASS 41 seconds
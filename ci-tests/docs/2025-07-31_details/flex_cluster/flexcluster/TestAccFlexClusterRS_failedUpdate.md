# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 20) FAIL(x 11) TIMEOUT
Success rate: 64.52%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-03 00:30](#error-2025-07-03t0030390000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | unknown | 50.03s
[2025-07-04 00:29](#error-2025-07-04t0029250000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38 | dev | unknown | 42.04s
[2025-07-09 00:29](#error-2025-07-09t0029580000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev | real_test_failure | 50.05s
[2025-07-14 03:31](#error-2025-07-14t0331120000) |  | dev |  | 7197.00s
[2025-07-15 00:30](#error-2025-07-15t0030210000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,26,27,38 | dev |  | 40.04s
[2025-07-17 00:30](#error-2025-07-17t0030250000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 50.05s
[2025-07-18 00:29](#error-2025-07-18t0029530000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,26,27,38 | dev |  | 34.03s
[2025-07-20 00:33](#error-2025-07-20t0033060000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,39 | qa |  | 40.06s
[2025-07-22 07:39](#error-2025-07-22t0739330000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 52.06s
[2025-07-26 00:29](#error-2025-07-26t0029370000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 71.02s
[2025-07-28 00:33](#error-2025-07-28t0033420000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev |  | 40.03s
[2025-07-31 00:30](#error-2025-07-31t0030500000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev |  | 266.02s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 54 seconds
- 2025-07-03

### Error 2025-07-03T00:30:39+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-03T00:30:39.380000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='28 days ago')
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
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-04T00:29:25.572000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='27 days ago')
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
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-09T00:29:58.730000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='22 days ago')
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
- 2025-07-25 PASS 41 seconds
- 2025-07-26

### Error 2025-07-26T00:29:37+00:00
```
2025-07-26T00:29:37.1733005Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-26T00:29:57.8547127Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-26T00:30:48.4060461Z --- FAIL: TestAccFlexClusterRS_failedUpdate (71.23s)
```

- 2025-07-27 PASS 42 seconds
- 2025-07-28

### Error 2025-07-28T00:33:42+00:00
```
2025-07-28T00:33:42.5842307Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-28T00:33:52.9118506Z   
2025-07-28T00:33:52.9122045Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-28T00:33:52.9124088Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-28T00:33:52.9126173Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-28T00:34:22.8841688Z --- FAIL: TestAccFlexClusterRS_failedUpdate (40.30s)
```

- 2025-07-29 PASS 42 seconds
- 2025-07-30 PASS 52 seconds
- 2025-07-31

### Error 2025-07-31T00:30:50+00:00
```
2025-07-31T00:30:50.7764242Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-31T00:31:02.0366754Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-31T00:35:17.0141927Z --- FAIL: TestAccFlexClusterRS_failedUpdate (266.24s)
```

# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## Timeline
### 2025-07-01
#### FAIL a minute
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T08:33:50.514000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='6 days ago')
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
### 2025-07-02
#### PASS 54 seconds
```
2025-07-02T00:29:57.3872013Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-02T00:30:52.2094979Z --- PASS: TestAccFlexClusterRS_failedUpdate (54.82s)
```
### 2025-07-03
#### FAIL 50 seconds
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-03T00:30:39.380000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='5 days ago')
CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30
```
2025-07-03T00:30:39.3809154Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-03T00:30:49.6480174Z   
2025-07-03T00:30:49.6483607Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-03T00:30:49.6485637Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-03T00:30:49.6487605Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-03T00:31:29.6571936Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.28s)
```
### 2025-07-04
#### FAIL 42 seconds
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-04T00:29:25.572000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='3 days ago')
CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38
```
2025-07-04T00:29:25.5728124Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-04T00:29:36.8709759Z   
2025-07-04T00:29:36.8711589Z     resource_test.go:26: Step 1/5 error: Check failed: Check 25/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-1451403847181752937", got "test-acc-tf-6033897913351790890"
2025-07-04T00:29:36.8714135Z         Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-07-04T00:29:36.8715354Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-04T00:30:07.9599737Z --- FAIL: TestAccFlexClusterRS_failedUpdate (42.39s)
```
### 2025-07-05
#### PASS 51 seconds
```
2025-07-05T00:29:00.1243361Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-05T00:29:51.6198765Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.50s)
```
### 2025-07-06
#### PASS 51 seconds
```
2025-07-06T00:33:02.4137316Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-06T00:33:53.8956854Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.48s)
```
### 2025-07-07
#### PASS 51 seconds
```
2025-07-07T00:32:29.2724751Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-07T00:33:20.9948233Z --- PASS: TestAccFlexClusterRS_failedUpdate (51.72s)
```
### 2025-07-08
#### PASS 41 seconds
```
2025-07-08T00:30:16.5762495Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-08T00:30:58.1966061Z --- PASS: TestAccFlexClusterRS_failedUpdate (41.62s)
```
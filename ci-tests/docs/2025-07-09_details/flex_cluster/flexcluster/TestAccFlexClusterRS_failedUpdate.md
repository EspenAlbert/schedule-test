# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 105) FAIL(x 8)
Success rate: 92.92%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:29 |  | qa |  | 0.00s
2025-06-05 00:28 |  | dev |  | 0.07s
2025-07-01 00:30 | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30,39 | dev | unknown | 51.01s
2025-07-01 03:30 | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | unknown | 42.03s
2025-07-01 08:33 | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30,38 | dev | flaky_check | 60.04s
2025-07-03 00:30 | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | unknown | 50.03s
2025-07-04 00:29 | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38 | dev | unknown | 42.04s
2025-07-09 00:29 | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev | real_test_failure | 50.05s

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
2025-04-10: MISSING
### 2025-04-11
#### PASS 54 seconds
### 2025-04-12
#### PASS 51 seconds
### 2025-04-13
#### PASS 51 seconds
### 2025-04-14
#### PASS 51 seconds
### 2025-04-15
#### PASS 53 seconds
### 2025-04-16
#### PASS 51 seconds
#### PASS 52 seconds
### 2025-04-17
#### PASS 53 seconds
### 2025-04-18
#### PASS 54 seconds
### 2025-04-19
#### PASS 53 seconds
### 2025-04-20
#### PASS 51 seconds
### 2025-04-21
#### PASS 51 seconds
### 2025-04-22
#### PASS 53 seconds
### 2025-04-23
#### PASS 54 seconds
### 2025-04-24
#### PASS 51 seconds
### 2025-04-25
#### PASS 53 seconds
### 2025-04-26
#### PASS a minute
### 2025-04-27
#### PASS 52 seconds
### 2025-04-28
#### PASS 52 seconds
### 2025-04-29
#### PASS 52 seconds
### 2025-04-30
#### PASS 52 seconds
#### PASS 54 seconds
### 2025-05-01
#### PASS 54 seconds
#### PASS 51 seconds
#### PASS 51 seconds
#### PASS 54 seconds
#### PASS 54 seconds
#### PASS 51 seconds
#### PASS 51 seconds
### 2025-05-02
#### PASS 51 seconds
### 2025-05-03
#### PASS 53 seconds
### 2025-05-04
#### PASS 51 seconds
### 2025-05-05
#### PASS 51 seconds
### 2025-05-06
#### PASS 51 seconds
### 2025-05-07
#### PASS 52 seconds
### 2025-05-08
#### PASS 52 seconds
### 2025-05-09
#### PASS a minute
### 2025-05-10
#### PASS 51 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:50.0720522Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-05-11T00:29:50.0721093Z     resource_test.go:25: Creating execution project: test-acc-tf-p-4446805679346291857
2025-05-11T00:29:50.0789287Z     resource_test.go:25: 
2025-05-11T00:29:50.0791214Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:50.0794347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:50.0797616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:64
2025-05-11T00:29:50.0801103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2025-05-11T00:29:50.0802433Z         	Error:      	Received unexpected error:
2025-05-11T00:29:50.0804057Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:50.0805363Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2025-05-11T00:29:50.0807124Z         	Messages:   	Project creation failed: test-acc-tf-p-4446805679346291857, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:50.0808513Z --- FAIL: TestAccFlexClusterRS_failedUpdate (0.01s)
```
### 2025-05-12
#### PASS 54 seconds
### 2025-05-13
#### PASS 52 seconds
#### PASS 51 seconds
### 2025-05-14
#### PASS a minute
### 2025-05-15
#### PASS 51 seconds
### 2025-05-16
#### PASS 52 seconds
### 2025-05-17
#### PASS 52 seconds
### 2025-05-18
#### PASS 51 seconds
### 2025-05-19
#### PASS a minute
### 2025-05-20
#### PASS 51 seconds
### 2025-05-21
#### PASS 52 seconds
### 2025-05-22
#### PASS 51 seconds
### 2025-05-23
#### PASS 51 seconds
### 2025-05-24
#### PASS 52 seconds
### 2025-05-25
#### PASS 54 seconds
### 2025-05-26
#### PASS 53 seconds
### 2025-05-27
#### PASS 52 seconds
### 2025-05-28
#### PASS 52 seconds
#### PASS 51 seconds
### 2025-05-29
#### PASS 52 seconds
### 2025-05-30
#### PASS 51 seconds
### 2025-05-31
#### PASS 54 seconds
### 2025-06-01
#### PASS 52 seconds
#### PASS 54 seconds
#### PASS 53 seconds
#### PASS 54 seconds
#### PASS 51 seconds
#### PASS 53 seconds
### 2025-06-02
#### PASS 52 seconds
#### PASS a minute
#### PASS 52 seconds
### 2025-06-03
#### PASS 51 seconds
### 2025-06-04
#### PASS a minute
### 2025-06-05
#### FAIL a moment
```
2025-06-05T00:28:50.1931172Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-06-05T00:28:50.8443409Z   
2025-06-05T00:28:50.8444405Z     resource_test.go:26: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:28:50.8445051Z         
2025-06-05T00:28:50.8447867Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250947/flexClusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:50.8449947Z         
2025-06-05T00:28:50.8450480Z           with mongodbatlas_flex_cluster.test,
2025-06-05T00:28:50.8451624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-06-05T00:28:50.8452650Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-06-05T00:28:50.8453420Z         
2025-06-05T00:28:50.8454237Z         Name: test-acc-tf-5010670358719519425, Project ID: 6840e4bec939f27413250947
2025-06-05T00:28:50.9020207Z --- FAIL: TestAccFlexClusterRS_failedUpdate (0.71s)
```
### 2025-06-06
#### PASS 51 seconds
### 2025-06-07
#### PASS 54 seconds
### 2025-06-08
#### PASS 51 seconds
### 2025-06-09
#### PASS 52 seconds
### 2025-06-10
#### PASS 52 seconds
### 2025-06-11
#### PASS 51 seconds
#### PASS 54 seconds
### 2025-06-12
#### PASS a minute
### 2025-06-13
#### PASS a minute
### 2025-06-14
#### PASS a minute
### 2025-06-15
#### PASS a minute
### 2025-06-16
#### PASS a minute
### 2025-06-17
#### PASS 54 seconds
### 2025-06-18
#### PASS a minute
### 2025-06-19
#### PASS a minute
### 2025-06-20
#### PASS a minute
### 2025-06-21
#### PASS 51 seconds
### 2025-06-22
#### PASS a minute
### 2025-06-23
#### PASS a minute
### 2025-06-24
#### PASS 52 seconds
### 2025-06-25
#### PASS 51 seconds
### 2025-06-26
#### PASS 44 seconds
### 2025-06-27
#### PASS 43 seconds
### 2025-06-28
#### PASS 44 seconds
### 2025-06-29
#### PASS a minute
### 2025-06-30
#### PASS 51 seconds
### 2025-07-01
#### FAIL 51 seconds
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-01T00:30:13.655000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='7 days ago')
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
#### PASS 42 seconds
#### FAIL 42 seconds
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-01T03:30:49.618000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='7 days ago')
CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30
```
2025-07-01T03:30:49.6180133Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-01T03:31:00.9336511Z    test_step_number=1 test_name=TestAccFlexClusterRS_failedUpdate
2025-07-01T03:31:00.9340231Z     resource_test.go:26: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T03:31:00.9342158Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T03:31:00.9344048Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T03:31:31.9289552Z --- FAIL: TestAccFlexClusterRS_failedUpdate (42.31s)
```
#### PASS 54 seconds
#### PASS 44 seconds
#### FAIL a minute
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T08:33:50.514000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='7 days ago')
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
### 2025-07-03
#### FAIL 50 seconds
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-03T00:30:39.380000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='6 days ago')
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
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-04T00:29:25.572000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='4 days ago')
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
### 2025-07-06
#### PASS 51 seconds
### 2025-07-07
#### PASS 51 seconds
### 2025-07-08
#### PASS 41 seconds
### 2025-07-09
#### FAIL 50 seconds
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-09T00:29:58.730000+00:00-TestAccFlexClusterRS_failedUpdate',confidence=1.0,ts_when='19 minutes ago')
CheckFailure for flex_clusters.test at Step: 1 Checks: 38
```
2025-07-09T00:29:58.7301525Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-07-09T00:30:09.0359010Z     resource_test.go:26: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-09T00:30:49.1924446Z --- FAIL: TestAccFlexClusterRS_failedUpdate (50.46s)
```
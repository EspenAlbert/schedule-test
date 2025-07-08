# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## Timeline
### 2025-07-01
#### FAIL 13 seconds
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T08:33:36.548000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='6 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-07-01T08:33:36.5488657Z === RUN   TestAccFlexClusterRS_basic
2025-07-01T08:33:36.5491305Z     resource_test.go:19: Creating execution project: test-acc-tf-p-1785466340546726613
2025-07-01T08:33:50.2902976Z   
2025-07-01T08:33:50.2905106Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:33:50.2907425Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:33:50.2909203Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T08:33:50.5135500Z   
2025-07-01T08:33:50.5136033Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T08:33:50.5136466Z         
2025-07-01T08:33:50.5137001Z         Error: error deleting a flex cluster (68639d6090ed24487dfd467a): test-acc-tf-7054316069849528213
2025-07-01T08:33:50.5137719Z         
2025-07-01T08:33:50.5138420Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68639d6090ed24487dfd467a/flexClusters/test-acc-tf-7054316069849528213
2025-07-01T08:33:50.5139196Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-01T08:33:50.5139795Z         Reason: Cannot terminate cluster test-acc-tf-7054316069849528213 in group
2025-07-01T08:33:50.5140421Z         68639d6090ed24487dfd467a because termination protection is enabled. Disable
2025-07-01T08:33:50.5141056Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-01T08:33:50.5141609Z         terminate cluster test-acc-tf-7054316069849528213 in group
2025-07-01T08:33:50.5142177Z         68639d6090ed24487dfd467a because termination protection is enabled. Disable
2025-07-01T08:33:50.5142940Z         termination protection and try again.], BadRequestDetail: 
2025-07-01T08:33:50.5143311Z --- FAIL: TestAccFlexClusterRS_basic (13.96s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:28:54.1883968Z === RUN   TestAccFlexClusterRS_basic
2025-07-02T00:28:54.1886582Z     resource_test.go:19: Creating execution project: test-acc-tf-p-8933973087770858713
2025-07-02T00:29:57.3871285Z --- PASS: TestAccFlexClusterRS_basic (63.20s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:29:28.0495906Z === RUN   TestAccFlexClusterRS_basic
2025-07-03T00:29:28.0498443Z     resource_test.go:19: Creating execution project: test-acc-tf-p-5890119917693301870
2025-07-03T00:30:39.3808498Z --- PASS: TestAccFlexClusterRS_basic (71.33s)
```
### 2025-07-04
#### FAIL 24 seconds
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-04T00:29:00.962000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='3 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-07-04T00:29:00.9624978Z === RUN   TestAccFlexClusterRS_basic
2025-07-04T00:29:00.9626317Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3285181739207567139
2025-07-04T00:29:25.1992871Z   
2025-07-04T00:29:25.1994646Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-04T00:29:25.1995855Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-04T00:29:25.1996847Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-04T00:29:25.5713396Z    test_name=TestAccFlexClusterRS_basic
2025-07-04T00:29:25.5714569Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T00:29:25.5715375Z         
2025-07-04T00:29:25.5716466Z         Error: error deleting a flex cluster (6867204d579d4c1b1e7acbac): test-acc-tf-6033897913351790890
2025-07-04T00:29:25.5717236Z         
2025-07-04T00:29:25.5718524Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204d579d4c1b1e7acbac/flexClusters/test-acc-tf-6033897913351790890
2025-07-04T00:29:25.5719950Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-04T00:29:25.5721020Z         Reason: Cannot terminate cluster test-acc-tf-6033897913351790890 in group
2025-07-04T00:29:25.5722176Z         6867204d579d4c1b1e7acbac because termination protection is enabled. Disable
2025-07-04T00:29:25.5723488Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-04T00:29:25.5724514Z         terminate cluster test-acc-tf-6033897913351790890 in group
2025-07-04T00:29:25.5725560Z         6867204d579d4c1b1e7acbac because termination protection is enabled. Disable
2025-07-04T00:29:25.5726855Z         termination protection and try again.], BadRequestDetail: 
2025-07-04T00:29:25.5727533Z --- FAIL: TestAccFlexClusterRS_basic (24.61s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:27:59.3582227Z === RUN   TestAccFlexClusterRS_basic
2025-07-05T00:27:59.3583448Z     resource_test.go:19: Creating execution project: test-acc-tf-p-6214406683342953159
2025-07-05T00:29:00.1242416Z --- PASS: TestAccFlexClusterRS_basic (60.77s)
```
### 2025-07-06
#### PASS 59 seconds
```
2025-07-06T00:32:03.2107000Z === RUN   TestAccFlexClusterRS_basic
2025-07-06T00:32:03.2109110Z     resource_test.go:19: Creating execution project: test-acc-tf-p-56772956102152591
2025-07-06T00:33:02.4136237Z --- PASS: TestAccFlexClusterRS_basic (59.20s)
```
### 2025-07-07
#### PASS 59 seconds
```
2025-07-07T00:31:29.5092647Z === RUN   TestAccFlexClusterRS_basic
2025-07-07T00:31:29.5094859Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3925604862678727989
2025-07-07T00:32:29.2723987Z --- PASS: TestAccFlexClusterRS_basic (59.76s)
```
### 2025-07-08
#### PASS 58 seconds
```
2025-07-08T00:29:17.5845831Z === RUN   TestAccFlexClusterRS_basic
2025-07-08T00:29:17.5847347Z     resource_test.go:19: Creating execution project: test-acc-tf-p-1015109397922070894
2025-07-08T00:30:16.5761935Z --- PASS: TestAccFlexClusterRS_basic (58.99s)
```
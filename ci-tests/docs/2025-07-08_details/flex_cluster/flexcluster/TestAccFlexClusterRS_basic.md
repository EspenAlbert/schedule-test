# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### FAIL 24 seconds
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-04T00:29:00.962000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='4 days ago')
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
### 2025-07-06
#### PASS 59 seconds
### 2025-07-07
#### PASS 59 seconds
### 2025-07-08
#### PASS 58 seconds
# cluster/cluster/TestMigCluster_partial_advancedConf Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### FAIL 5 minutes
GoTestErrorClassification(error_class='unclassified',author='human',run_id='2025-07-02T00:28:47.595000+00:00-TestMigCluster_partial_advancedConf',confidence=1.0,ts_when='6 days ago')

```
2025-07-02T00:28:47.5959695Z === RUN   TestMigCluster_partial_advancedConf
2025-07-02T00:28:55.2684009Z === CONT  TestMigCluster_partial_advancedConf
2025-07-02T00:28:57.7924217Z   
2025-07-02T00:29:55.2561827Z === NAME  TestMigCluster_partial_advancedConf
2025-07-02T00:29:55.2563290Z     pre_check.go:40: Time before creating cluster: 2025-07-02T00:29:55.255849645Z, ProjectID: 68647d3d948ea608f1ec2630, Cluster name: test-acc-tf-c-6758096426470617589
2025-07-02T00:34:03.7284323Z === NAME  TestMigCluster_partial_advancedConf
2025-07-02T00:34:03.7284889Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:34:03.7285303Z         
2025-07-02T00:34:03.7286501Z         Error: error creating MongoDB Cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d3d948ea608f1ec2630/clusters/test-acc-tf-c-6758096426470617589": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-02T00:34:03.7287368Z         
2025-07-02T00:34:03.7287642Z           with mongodbatlas_cluster.test,
2025-07-02T00:34:03.7288624Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-02T00:34:03.7289161Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-02T00:34:03.7289441Z         
2025-07-02T00:34:03.9155071Z --- FAIL: TestMigCluster_partial_advancedConf (308.65s)
```
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 22 minutes
### 2025-07-05
#### PASS 11 minutes
### 2025-07-06
#### PASS 10 minutes
### 2025-07-07
#### PASS 13 minutes
### 2025-07-08
#### PASS 14 minutes
# cluster/cluster/TestMigCluster_partial_advancedConf Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 15 minutes
```
2025-07-01T08:33:33.2085875Z === RUN   TestMigCluster_partial_advancedConf
2025-07-01T08:33:37.0293981Z === CONT  TestMigCluster_partial_advancedConf
2025-07-01T08:34:27.0192727Z === NAME  TestMigCluster_partial_advancedConf
2025-07-01T08:34:27.0193826Z     pre_check.go:40: Time before creating cluster: 2025-07-01T08:34:27.019005787Z, ProjectID: 68639d5b90ed24487dfd40c8, Cluster name: test-acc-tf-c-104762429490543699
2025-07-01T08:49:12.5488414Z --- PASS: TestMigCluster_partial_advancedConf (935.53s)
```
### 2025-07-02
#### FAIL 5 minutes
GoTestErrorClassification(error_class='unclassified',author='human',run_id='2025-07-02T00:28:47.595000+00:00-TestMigCluster_partial_advancedConf',confidence=1.0,ts_when='5 days ago')

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
```
2025-07-03T00:29:26.0724279Z === RUN   TestMigCluster_partial_advancedConf
2025-07-03T00:29:32.3636727Z === CONT  TestMigCluster_partial_advancedConf
2025-07-03T00:30:07.3663222Z === NAME  TestMigCluster_partial_advancedConf
2025-07-03T00:30:07.3665291Z     pre_check.go:40: Time before creating cluster: 2025-07-03T00:30:07.366055304Z, ProjectID: 6865cee4699daf2aab4cb693, Cluster name: test-acc-tf-c-1375019509460050987
2025-07-03T00:43:19.8931261Z --- PASS: TestMigCluster_partial_advancedConf (827.53s)
```
### 2025-07-04
#### PASS 22 minutes
```
2025-07-04T00:28:48.5903374Z === RUN   TestMigCluster_partial_advancedConf
2025-07-04T00:28:53.1252328Z === CONT  TestMigCluster_partial_advancedConf
2025-07-04T00:29:53.1289963Z === NAME  TestMigCluster_partial_advancedConf
2025-07-04T00:29:53.1291870Z     pre_check.go:40: Time before creating cluster: 2025-07-04T00:29:53.128744858Z, ProjectID: 6867203d8263f52e03e763a4, Cluster name: test-acc-tf-c-3352499517841245433
2025-07-04T00:51:07.1226064Z --- PASS: TestMigCluster_partial_advancedConf (1334.00s)
```
### 2025-07-05
#### PASS 11 minutes
```
2025-07-05T00:28:03.0624952Z === RUN   TestMigCluster_partial_advancedConf
2025-07-05T00:28:09.1133054Z === CONT  TestMigCluster_partial_advancedConf
2025-07-05T00:28:44.1163852Z === NAME  TestMigCluster_partial_advancedConf
2025-07-05T00:28:44.1164929Z     pre_check.go:40: Time before creating cluster: 2025-07-05T00:28:44.116116912Z, ProjectID: 6868718c21e3e31abeeb8626, Cluster name: test-acc-tf-c-3094431984236517918
2025-07-05T00:39:31.2917155Z --- PASS: TestMigCluster_partial_advancedConf (682.18s)
```
### 2025-07-06
#### PASS 10 minutes
```
2025-07-06T00:32:00.8611994Z === RUN   TestMigCluster_partial_advancedConf
2025-07-06T00:32:04.2359928Z === CONT  TestMigCluster_partial_advancedConf
2025-07-06T00:32:39.2148507Z === NAME  TestMigCluster_partial_advancedConf
2025-07-06T00:32:39.2150192Z     pre_check.go:40: Time before creating cluster: 2025-07-06T00:32:39.214560239Z, ProjectID: 6869c3ff690ae45e168bcbaf, Cluster name: test-acc-tf-c-5289314962182406547
2025-07-06T00:32:39.5964793Z    test_step_number=1
2025-07-06T00:42:36.2046892Z --- PASS: TestMigCluster_partial_advancedConf (631.99s)
```
### 2025-07-07
#### PASS 13 minutes
```
2025-07-07T00:31:31.6842296Z === RUN   TestMigCluster_partial_advancedConf
2025-07-07T00:31:36.2478062Z === CONT  TestMigCluster_partial_advancedConf
2025-07-07T00:32:01.2446875Z === NAME  TestMigCluster_partial_advancedConf
2025-07-07T00:32:01.2448484Z     pre_check.go:40: Time before creating cluster: 2025-07-07T00:32:01.244372109Z, ProjectID: 686b1560ffed0c5c678b232d, Cluster name: test-acc-tf-c-2528304245303338070
2025-07-07T00:45:13.8569889Z --- PASS: TestMigCluster_partial_advancedConf (817.62s)
```
### 2025-07-08
#### PASS 14 minutes
```
2025-07-08T00:29:11.7917027Z === RUN   TestMigCluster_partial_advancedConf
2025-07-08T00:29:14.7599669Z === CONT  TestMigCluster_partial_advancedConf
2025-07-08T00:29:54.7697582Z === NAME  TestMigCluster_partial_advancedConf
2025-07-08T00:29:54.7699732Z     pre_check.go:40: Time before creating cluster: 2025-07-08T00:29:54.769426815Z, ProjectID: 686c6655cf503214420ec2a7, Cluster name: test-acc-tf-c-891320150776907881
2025-07-08T00:43:30.7810993Z --- PASS: TestMigCluster_partial_advancedConf (856.02s)
```
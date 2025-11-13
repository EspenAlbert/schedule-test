# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-26 00:29](#error-2025-10-26t0029570000) |  | qa |  | 17.05s
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | flaky_500 | 12773.01s
[2025-11-11 00:29](#error-2025-11-11t0029110000) |  | dev | flaky_400 | 34.05s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 33 minutes
- 2025-10-16 PASS 56 minutes
- 2025-10-17 PASS 39 minutes
- 2025-10-18 PASS 32 minutes
- 2025-10-19 PASS 34 minutes
- 2025-10-20
  - PASS 47 minutes
  - PASS 29 minutes
- 2025-10-21 PASS 31 minutes
- 2025-10-22
  - PASS 48 minutes
  - PASS 36 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 48 minutes
- 2025-10-25 PASS 37 minutes
- 2025-10-26

### Error 2025-10-26T00:29:57+00:00
```
2025-10-26T00:29:57.6207676Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-10-26T00:31:28.3823624Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-10-26T00:31:43.3761638Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-10-26T00:31:43.3763603Z     pre_check.go:36: Time before creating cluster: 2025-10-26T00:31:43.375900654Z, ProjectID: 68fd6b85328f9755b2ceb383, Cluster name: test-acc-tf-c-993398419559596018
2025-10-26T00:31:44.1129745Z   
2025-10-26T00:31:44.1130421Z     resource_test.go:363: Step 1/4 error: Error running apply: exit status 1
2025-10-26T00:31:44.1130784Z         
2025-10-26T00:31:44.1131136Z         Error: Error in create
2025-10-26T00:31:44.1131377Z         
2025-10-26T00:31:44.1131719Z           with mongodbatlas_advanced_cluster.test,
2025-10-26T00:31:44.1132440Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-26T00:31:44.1133208Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-26T00:31:44.1133510Z         
2025-10-26T00:31:44.1133903Z         cluster name: test-acc-tf-c-993398419559596018, API error details:
2025-10-26T00:31:44.1134562Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b85328f9755b2ceb383/clusters
2025-10-26T00:31:44.1135066Z         POST: HTTP 403 Forbidden (Error code:
2025-10-26T00:31:44.1135565Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-26T00:31:44.1136139Z         Configuration. Contains selections that are unavailable due to your
2025-10-26T00:31:44.1154434Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-26T00:31:44.1155188Z         BadRequestDetail: 
2025-10-26T00:31:44.1577877Z   
2025-10-26T00:31:44.1605999Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (17.53s)
```

- 2025-10-27 PASS an hour
- 2025-10-28 PASS 36 minutes
- 2025-10-29 PASS 43 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3902744Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T00:29:52.4845457Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T00:30:22.4665156Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T00:30:22.4666986Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:30:22.466220793Z, ProjectID: 6902b122abf4374f32996ea1, Cluster name: test-acc-tf-c-5680553603968263238
2025-10-30T04:02:42.7619786Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-10-30T04:02:42.7620700Z     resource_test.go:363: Step 2/4 error: Error running apply: exit status 1
2025-10-30T04:02:42.7621294Z         
2025-10-30T04:02:42.7621911Z         Error: Error in delete
2025-10-30T04:02:42.7622346Z         
2025-10-30T04:02:42.7623074Z         cluster=test-acc-tf-c-5680553603968263238 didn't reach desired state:
2025-10-30T04:02:42.7624119Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:02:42.7624873Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:02:43.1479974Z    test_name=TestAccClusterAdvancedCluster_advancedConfig test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest1775876691 test_step_number=2
2025-10-30T04:02:43.1481296Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:02:43.1482289Z         
2025-10-30T04:02:43.1482802Z         Error: Error in delete
2025-10-30T04:02:43.1483191Z         
2025-10-30T04:02:43.1483750Z         cluster name: test-acc-tf-c-5680553603968263238, API error details:
2025-10-30T04:02:43.1484725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b122abf4374f32996ea1/clusters/test-acc-tf-c-5680553603968263238
2025-10-30T04:02:43.1485500Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T04:02:43.1486107Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2025-10-30T04:02:43.1486783Z         test-acc-tf-c-5680553603968263238 has already been requested for deletion.
2025-10-30T04:02:43.1487480Z         Reason: Bad Request. Params: [test-acc-tf-c-5680553603968263238],
2025-10-30T04:02:43.1487986Z         BadRequestDetail: 
2025-10-30T04:02:43.1488485Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (12773.10s)
```

- 2025-10-31 PASS 35 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 32 minutes
- 2025-11-03 PASS 38 minutes
- 2025-11-04 PASS 39 minutes
- 2025-11-05
  - PASS 39 minutes
  - PASS 32 minutes
- 2025-11-06 PASS 48 minutes
- 2025-11-07 PASS 37 minutes
- 2025-11-08 PASS an hour
- 2025-11-09 PASS 31 minutes
- 2025-11-10 PASS 33 minutes
- 2025-11-11

### Error 2025-11-11T00:29:11+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-11T00:29:11.793000+00:00-TestAccClusterAdvancedCluster_advancedConfig',confidence=1.0,ts_when='2 days ago')

```
2025-11-11T00:29:11.7933864Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2025-11-11T00:31:00.3734944Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2025-11-11T00:31:30.3620070Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2025-11-11T00:31:30.3621816Z     pre_check.go:46: Time before creating cluster: 2025-11-11T00:31:30.361664279Z, ProjectID: 69128357e1c69e6c7a213373, Cluster name: test-acc-tf-c-1881521552076711038
2025-11-11T00:31:31.0510972Z   
2025-11-11T00:31:31.0511473Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2025-11-11T00:31:31.0511842Z         
2025-11-11T00:31:31.0512248Z         Error: Error in create
2025-11-11T00:31:31.0512509Z         
2025-11-11T00:31:31.0512838Z           with mongodbatlas_advanced_cluster.test,
2025-11-11T00:31:31.0514093Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-11T00:31:31.0514712Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-11T00:31:31.0515208Z         
2025-11-11T00:31:31.0534503Z         cluster name: test-acc-tf-c-1881521552076711038, API error details:
2025-11-11T00:31:31.0535640Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69128357e1c69e6c7a213373/clusters
2025-11-11T00:31:31.0536893Z         POST: HTTP 403 Forbidden (Error code:
2025-11-11T00:31:31.0537822Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-11T00:31:31.0539041Z         Configuration. Contains selections that are unavailable due to your
2025-11-11T00:31:31.0540126Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-11T00:31:31.0540905Z         BadRequestDetail: 
2025-11-11T00:31:31.0930603Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (34.53s)
```

- 2025-11-12 PASS 36 minutes
- 2025-11-13
  - PASS an hour
  - PASS 33 minutes
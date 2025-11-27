# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10) TIMEOUT
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s
[2025-11-19 00:29](#error-2025-11-19t0029020000) |  | dev | timeout | 10845.07s
[2025-11-19 09:30](#error-2025-11-19t0930070000) |  | dev | timeout | 10805.08s
[2025-11-20 00:28](#error-2025-11-20t0028090000) |  | dev | timeout | 10810.07s
[2025-11-20 10:02](#error-2025-11-20t1002000000) |  | dev | timeout | 10805.07s
[2025-11-21 00:28](#error-2025-11-21t0028330000) |  | dev | timeout | 10805.08s
[2025-11-22 00:27](#error-2025-11-22t0027020000) |  | dev | timeout | 10810.07s
[2025-11-24 00:30](#error-2025-11-24t0030130000) |  | dev | timeout | 10805.07s
[2025-11-25 00:27](#error-2025-11-25t0027260000) |  | dev | timeout | 10855.07s
[2025-11-26 00:28](#error-2025-11-26t0028440000) |  | dev | timeout | 10860.06s
[2025-11-27 00:28](#error-2025-11-27t0028330000) |  | dev | timeout | 10815.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2622653Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T00:29:52.4634169Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T00:29:57.4615923Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T00:29:57.4617568Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:29:57.461394937Z, ProjectID: 6902b124abf4374f3299781b, Cluster name: test-acc-tf-c-8380702737292064106
2025-10-30T00:29:59.2444572Z    test_name=TestAccClusterAdvancedCluster_withLabelIgnored
2025-10-30T03:46:40.9435322Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-10-30T03:46:40.9436087Z     resource_test.go:862: Step 2/3 error: Error running apply: exit status 1
2025-10-30T03:46:40.9436463Z         
2025-10-30T03:46:40.9436719Z         Error: Error in update
2025-10-30T03:46:40.9436968Z         
2025-10-30T03:46:40.9437353Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:46:40.9438041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:46:40.9438725Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:46:40.9439122Z         
2025-10-30T03:46:40.9439587Z         cluster=test-acc-tf-c-8380702737292064106 didn't reach desired state: IDLE,
2025-10-30T03:46:40.9440487Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:46:40.9440995Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:46:41.7279160Z    test_step_number=2
2025-10-30T05:28:11.5677105Z 		TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (4h58m19s)
2025-10-30T05:28:11.5678726Z 		TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (4h58m19s)
2025-10-30T05:28:11.5680097Z 		TestAccClusterAdvancedCluster_biConnectorConfig (4h58m19s)
```

- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 22 minutes
- 2025-11-05
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 45 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 19 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 20 minutes
- 2025-11-13 PASS 37 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 23 minutes
- 2025-11-18 PASS 20 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:02+00:00
```
2025-11-19T00:29:02.9797260Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T00:35:20.7721383Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T00:36:05.7360390Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T00:36:05.7361971Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:36:05.735706001Z, ProjectID: 691d0f4cb03baf562b975925, Cluster name: test-acc-tf-c-9205399417318525319
2025-11-19T03:36:06.4253091Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T03:36:06.4253777Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-19T03:36:06.4254238Z         
2025-11-19T03:36:06.4254599Z         Error: Error in create
2025-11-19T03:36:06.4254852Z         
2025-11-19T03:36:06.4255290Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:36:06.4256189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:36:06.4256942Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:36:06.4257265Z         
2025-11-19T03:36:06.4257837Z         cluster=test-acc-tf-c-9205399417318525319 didn't reach desired state: IDLE,
2025-11-19T03:36:06.4258424Z         error: context deadline exceeded
2025-11-19T03:36:06.4689981Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10845.71s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:07+00:00
```
2025-11-19T09:30:07.9714345Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T09:31:55.5569373Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T09:32:00.5574928Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T09:32:00.5577456Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:32:00.55714762Z, ProjectID: 691d8e1d5ab64e7c55676752, Cluster name: test-acc-tf-c-8919988105293444121
2025-11-19T12:32:01.2608201Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-19T12:32:01.2608877Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-19T12:32:01.2609392Z         
2025-11-19T12:32:01.2609652Z         Error: Error in create
2025-11-19T12:32:01.2609914Z         
2025-11-19T12:32:01.2610250Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:32:01.2610897Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:32:01.2611501Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:32:01.2611817Z         
2025-11-19T12:32:01.2612263Z         cluster=test-acc-tf-c-8919988105293444121 didn't reach desired state: IDLE,
2025-11-19T12:32:01.2612744Z         error: context deadline exceeded
2025-11-19T12:32:01.3064478Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10805.75s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:09+00:00
```
2025-11-20T00:28:09.4966175Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T00:29:55.5755740Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T00:30:05.5712260Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T00:30:05.5714103Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:30:05.570954376Z, ProjectID: 691e6094a0b6e4670df2d2d5, Cluster name: test-acc-tf-c-312943781456030295
2025-11-20T03:30:06.2573597Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T03:30:06.2574231Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-20T03:30:06.2574701Z         
2025-11-20T03:30:06.2575066Z         Error: Error in create
2025-11-20T03:30:06.2575295Z         
2025-11-20T03:30:06.2575645Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:30:06.2576341Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:30:06.2576883Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:30:06.2577213Z         
2025-11-20T03:30:06.2577848Z         cluster=test-acc-tf-c-312943781456030295 didn't reach desired state: IDLE,
2025-11-20T03:30:06.2578462Z         error: context deadline exceeded
2025-11-20T03:30:06.2994557Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10810.73s)
```

  - FAIL 3 hours

### Error 2025-11-20T10:02:00+00:00
```
2025-11-20T10:02:00.7962787Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T10:03:33.6597513Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T10:03:38.6596299Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T10:03:38.6598125Z     pre_check.go:46: Time before creating cluster: 2025-11-20T10:03:38.659346356Z, ProjectID: 691ee716efafe847b12800e2, Cluster name: test-acc-tf-c-251624840230183989
2025-11-20T10:03:38.6863476Z    test_name=TestMigAdvancedCluster_singleShardedMultiCloud test_terraform_path=/home/runner/work/_temp/0ded2230-e9ea-4553-8f7f-1463f6ed3fd4/terraform test_working_directory=/tmp/plugintest983654802
2025-11-20T13:03:39.3374083Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-20T13:03:39.3374801Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-20T13:03:39.3375289Z         
2025-11-20T13:03:39.3375743Z         Error: Error in create
2025-11-20T13:03:39.3376119Z         
2025-11-20T13:03:39.3376459Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T13:03:39.3377286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T13:03:39.3378216Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T13:03:39.3378539Z         
2025-11-20T13:03:39.3379176Z         cluster=test-acc-tf-c-251624840230183989 didn't reach desired state: IDLE,
2025-11-20T13:03:39.3379982Z         error: context deadline exceeded
2025-11-20T13:03:39.3821568Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10805.72s)
```

- 2025-11-21

### Error 2025-11-21T00:28:33+00:00
```
2025-11-21T00:28:33.9768823Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-21T00:30:22.6458624Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-21T00:30:27.6467622Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-21T00:30:27.6469446Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:30:27.646446692Z, ProjectID: 691fb22fa5aa29482fbeb8e1, Cluster name: test-acc-tf-c-1758822465103892346
2025-11-21T03:30:28.4428595Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-21T03:30:28.4429422Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-21T03:30:28.4429815Z         
2025-11-21T03:30:28.4430173Z         Error: Error in create
2025-11-21T03:30:28.4430425Z         
2025-11-21T03:30:28.4430809Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:28.4431502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:28.4432200Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:28.4432610Z         
2025-11-21T03:30:28.4433066Z         cluster=test-acc-tf-c-1758822465103892346 didn't reach desired state: IDLE,
2025-11-21T03:30:28.4433666Z         error: context deadline exceeded
2025-11-21T03:30:28.4875679Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10805.84s)
```

- 2025-11-22

### Error 2025-11-22T00:27:02+00:00
```
2025-11-22T00:27:02.1584540Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-22T00:28:42.9375255Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-22T00:28:52.9379000Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-22T00:28:52.9380948Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:28:52.937607465Z, ProjectID: 69210353a2a1e670f5294277, Cluster name: test-acc-tf-c-7406659692682017796
2025-11-22T03:28:53.6249820Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-22T03:28:53.6250784Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-22T03:28:53.6251618Z         
2025-11-22T03:28:53.6252047Z         Error: Error in create
2025-11-22T03:28:53.6252370Z         
2025-11-22T03:28:53.6252704Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:53.6253364Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:53.6254099Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:53.6254432Z         
2025-11-22T03:28:53.6254922Z         cluster=test-acc-tf-c-7406659692682017796 didn't reach desired state: IDLE,
2025-11-22T03:28:53.6255624Z         error: context deadline exceeded
2025-11-22T03:28:53.6710171Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10810.73s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:13+00:00
```
2025-11-24T00:30:13.9771071Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-24T00:33:24.1944744Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-24T00:33:29.1830972Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-24T00:33:29.1833578Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:33:29.182650675Z, ProjectID: 6923a71421519f56cb860d0a, Cluster name: test-acc-tf-c-8424544171139242221
2025-11-24T03:33:29.8229631Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-24T03:33:29.8230592Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-24T03:33:29.8231226Z         
2025-11-24T03:33:29.8231638Z         Error: Error in create
2025-11-24T03:33:29.8231936Z         
2025-11-24T03:33:29.8232329Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:29.8233129Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:29.8233788Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:29.8234536Z         
2025-11-24T03:33:29.8235074Z         cluster=test-acc-tf-c-8424544171139242221 didn't reach desired state: IDLE,
2025-11-24T03:33:29.8235539Z         error: context deadline exceeded
2025-11-24T03:33:29.8682791Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10805.69s)
```

- 2025-11-25

### Error 2025-11-25T00:27:26+00:00
```
2025-11-25T00:27:26.7570773Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-25T00:31:51.4395084Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-25T00:31:52.6902737Z   diagnostic_detail=
2025-11-25T00:31:52.6911331Z    tf_req_id=27473d4e-bcf1-975a-83c9-33a61897812c diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_advanced_cluster tf_proto_version=6.10
2025-11-25T00:32:46.4029628Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-25T00:32:46.4030949Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:32:46.402385418Z, ProjectID: 6924f7ec2b3b85618cf91242, Cluster name: test-acc-tf-c-8144461427860633054
2025-11-25T03:32:47.0822395Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-25T03:32:47.0823327Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-25T03:32:47.0823896Z         
2025-11-25T03:32:47.0824173Z         Error: Error in create
2025-11-25T03:32:47.0824433Z         
2025-11-25T03:32:47.0824769Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:32:47.0825478Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:32:47.0826214Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:32:47.0826646Z         
2025-11-25T03:32:47.0827279Z         cluster=test-acc-tf-c-8144461427860633054 didn't reach desired state: IDLE,
2025-11-25T03:32:47.0827749Z         error: context deadline exceeded
2025-11-25T03:32:47.1314773Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10855.71s)
```

- 2025-11-26

### Error 2025-11-26T00:28:44+00:00
```
2025-11-26T00:28:44.9772703Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-26T00:30:27.5287244Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-26T00:31:27.5080072Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-26T00:31:27.5081613Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:31:27.507764955Z, ProjectID: 692649bafa65867a021b9db1, Cluster name: test-acc-tf-c-3710869453255324493
2025-11-26T03:31:28.0777869Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-26T03:31:28.0778831Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-26T03:31:28.0779463Z         
2025-11-26T03:31:28.0779868Z         Error: Error in create
2025-11-26T03:31:28.0780118Z         
2025-11-26T03:31:28.0780437Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:31:28.0781082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:31:28.0781813Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:31:28.0782132Z         
2025-11-26T03:31:28.0782708Z         cluster=test-acc-tf-c-3710869453255324493 didn't reach desired state: IDLE,
2025-11-26T03:31:28.0783536Z         error: context deadline exceeded
2025-11-26T03:31:28.1226551Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10860.60s)
```

- 2025-11-27

### Error 2025-11-27T00:28:33+00:00
```
2025-11-27T00:28:33.0239415Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-27T00:30:06.4885634Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-27T00:30:21.4874961Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-27T00:30:21.4876324Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:30:21.487249206Z, ProjectID: 69279b2db358b3221e8cdada, Cluster name: test-acc-tf-c-2730774457561171978
2025-11-27T03:30:22.1552295Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-11-27T03:30:22.1553002Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2025-11-27T03:30:22.1553421Z         
2025-11-27T03:30:22.1553672Z         Error: Error in create
2025-11-27T03:30:22.1554133Z         
2025-11-27T03:30:22.1554470Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:22.1555106Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:22.1555708Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:22.1556149Z         
2025-11-27T03:30:22.1556599Z         cluster=test-acc-tf-c-2730774457561171978 didn't reach desired state: IDLE,
2025-11-27T03:30:22.1557294Z         error: context deadline exceeded
2025-11-27T03:30:22.2014477Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10815.71s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 16 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 15 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 17 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 20 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 18 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING

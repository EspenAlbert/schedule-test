# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 19) FAIL(x 4)
Success rate: 82.61%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-06 00:36](#error-2026-02-06t0036150000) |  | dev | 4674.04s
[2026-03-02 00:38](#error-2026-03-02t0038500000) | VERSION_GONE /api/atlas/v2/groups/69a4dc16756ae9983e96921f/clusters | dev | 26.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06

### Error 2026-02-06T00:36:15+00:00
```
2026-02-06T00:36:15.8422859Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-02-06T00:36:17.4366675Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-02-06T01:51:18.0167632Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-02-06T01:51:18.0168714Z     resource_migration_v1x_test.go:126: Step 1/5 error: After applying this test step, the non-refresh plan was not empty.
2026-02-06T01:51:18.0169242Z         stdout:
2026-02-06T01:51:18.0169515Z         
2026-02-06T01:51:18.0170292Z         Terraform used the selected providers to generate the following execution
2026-02-06T01:51:18.0170948Z         plan. Resource actions are indicated with the following symbols:
2026-02-06T01:51:18.0171340Z           ~ update in-place
2026-02-06T01:51:18.0171689Z          <= read (data resources)
2026-02-06T01:51:18.0171945Z         
2026-02-06T01:51:18.0172297Z         Terraform will perform the following actions:
2026-02-06T01:51:18.0172602Z         
2026-02-06T01:51:18.0173055Z           # data.mongodbatlas_advanced_cluster.test will be read during apply
2026-02-06T01:51:18.0173626Z           # (depends on a resource or a module with changes pending)
2026-02-06T01:51:18.0174135Z          <= data "mongodbatlas_advanced_cluster" "test" {
2026-02-06T01:51:18.0174734Z               + advanced_configuration               = (known after apply)
2026-02-06T01:51:18.0175303Z               + backup_enabled                       = (known after apply)
2026-02-06T01:51:18.0175955Z               + bi_connector_config                  = (known after apply)
2026-02-06T01:51:18.0176556Z               + cluster_type                         = (known after apply)
2026-02-06T01:51:18.0177176Z               + config_server_management_mode        = (known after apply)
2026-02-06T01:51:18.0177813Z               + config_server_type                   = (known after apply)
2026-02-06T01:51:18.0178360Z               + connection_strings                   = (known after apply)
2026-02-06T01:51:18.0178962Z               + create_date                          = (known after apply)
2026-02-06T01:51:18.0179556Z               + disk_size_gb                         = (known after apply)
2026-02-06T01:51:18.0180260Z               + encryption_at_rest_provider          = (known after apply)
2026-02-06T01:51:18.0180892Z               + global_cluster_self_managed_sharding = (known after apply)
2026-02-06T01:51:18.0181415Z               + id                                   = (known after apply)
2026-02-06T01:51:18.0182084Z               + labels                               = (known after apply)
2026-02-06T01:51:18.0182679Z               + mongo_db_major_version               = (known after apply)
2026-02-06T01:51:18.0183304Z               + mongo_db_version                     = (known after apply)
2026-02-06T01:51:18.0183941Z               + name                                 = "test-acc-tf-c-21916578480512141"
2026-02-06T01:51:18.0184493Z               + paused                               = (known after apply)
2026-02-06T01:51:18.0185069Z               + pinned_fcv                           = (known after apply)
2026-02-06T01:51:18.0185666Z               + pit_enabled                          = (known after apply)
2026-02-06T01:51:18.0186285Z               + project_id                           = "6985377d9432dddb0ecb20d7"
2026-02-06T01:51:18.0186834Z               + redact_client_log_data               = (known after apply)
2026-02-06T01:51:18.0187439Z               + replica_set_scaling_strategy         = (known after apply)
2026-02-06T01:51:18.0188138Z               + replication_specs                    = (known after apply)
2026-02-06T01:51:18.0188764Z               + root_cert_type                       = (known after apply)
2026-02-06T01:51:18.0189322Z               + state_name                           = (known after apply)
2026-02-06T01:51:18.0189969Z               + tags                                 = (known after apply)
2026-02-06T01:51:18.0190516Z               + termination_protection_enabled       = (known after apply)
2026-02-06T01:51:18.0191142Z               + version_release_system               = (known after apply)
2026-02-06T01:51:18.0191511Z             }
2026-02-06T01:51:18.0191740Z         
2026-02-06T01:51:18.0192166Z           # data.mongodbatlas_advanced_clusters.test will be read during apply
2026-02-06T01:51:18.0192784Z           # (depends on a resource or a module with changes pending)
2026-02-06T01:51:18.0193303Z          <= data "mongodbatlas_advanced_clusters" "test" {
2026-02-06T01:51:18.0193934Z               + id         = (known after apply)
2026-02-06T01:51:18.0194376Z               + project_id = "6985377d9432dddb0ecb20d7"
2026-02-06T01:51:18.0194859Z               + results    = (known after apply)
2026-02-06T01:51:18.0195150Z             }
2026-02-06T01:51:18.0195360Z         
2026-02-06T01:51:18.0195809Z           # mongodbatlas_advanced_cluster.test will be updated in-place
2026-02-06T01:51:18.0196375Z           ~ resource "mongodbatlas_advanced_cluster" "test" {
2026-02-06T01:51:18.0197950Z                 id                                               = "Y2x1c3Rlcl9pZA==:Njk4NTM3YTE5NDMyZGRkYjBlY2JlYzJl-Y2x1c3Rlcl9uYW1l:dGVzdC1hY2MtdGYtYy0yMTkxNjU3ODQ4MDUxMjE0MQ==-cHJvamVjdF9pZA==:Njk4NTM3N2Q5NDMyZGRkYjBlY2IyMGQ3"
2026-02-06T01:51:18.0199166Z                 name                                             = "test-acc-tf-c-21916578480512141"
2026-02-06T01:51:18.0199717Z                 # (22 unchanged attributes hidden)
2026-02-06T01:51:18.0200125Z         
2026-02-06T01:51:18.0200419Z               ~ replication_specs {
2026-02-06T01:51:18.0200938Z                     id           = "698537a19432dddb0ecbec10"
2026-02-06T01:51:18.0201412Z                     # (5 unchanged attributes hidden)
2026-02-06T01:51:18.0201692Z         
2026-02-06T01:51:18.0201992Z                   ~ region_configs {
2026-02-06T01:51:18.0202477Z                         # (4 unchanged attributes hidden)
2026-02-06T01:51:18.0202753Z         
2026-02-06T01:51:18.0203110Z                       ~ electable_specs {
2026-02-06T01:51:18.0203618Z                           ~ instance_size   = "M20" -> "M10"
2026-02-06T01:51:18.0204157Z                             # (4 unchanged attributes hidden)
2026-02-06T01:51:18.0204506Z                         }
2026-02-06T01:51:18.0204730Z         
2026-02-06T01:51:18.0205118Z                         # (2 unchanged blocks hidden)
2026-02-06T01:51:18.0205431Z                     }
2026-02-06T01:51:18.0205665Z                 }
2026-02-06T01:51:18.0205997Z         
2026-02-06T01:51:18.0206330Z                 # (2 unchanged blocks hidden)
2026-02-06T01:51:18.0206612Z             }
2026-02-06T01:51:18.0206829Z         
2026-02-06T01:51:18.0207153Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-02-06T01:54:11.8709616Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (4674.44s)
```

- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 33 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 34 minutes
- 2026-02-12: MISSING
- 2026-02-13 PASS 36 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 35 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 34 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 33 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 35 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 32 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 31 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 26 seconds

### Error 2026-03-02T00:38:50+00:00
```
2026-03-02T00:38:50.5304374Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T00:38:52.2160229Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T00:39:18.6599149Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T00:39:18.6600316Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-03-02T00:39:18.6601030Z         
2026-03-02T00:39:18.6604353Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc16756ae9983e96921f/clusters POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05 of api/atlas/v2/groups/69a4dc16756ae9983e96921f/clusters is no longer available. Reason: Gone. Params: [2024-08-05 api/atlas/v2/groups/69a4dc16756ae9983e96921f/clusters], BadRequestDetail: 
2026-03-02T00:39:18.6607719Z         
2026-03-02T00:39:18.6608343Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T00:39:18.6609666Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T00:39:18.6610907Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T00:39:18.6611520Z         
2026-03-02T00:39:18.8733453Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (26.66s)
```

  - PASS 31 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 31 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 41 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-02 11:25](#error-2026-03-02t1125240000) | VERSION_GONE /api/atlas/v2/groups/69a573a20b79a8d7dc98dcaa/clusters | qa | 31.09s
[2026-03-02 11:56](#error-2026-03-02t1156300000) | VERSION_GONE /api/atlas/v2/groups/69a57aec30346acc7a7dfa47/clusters | qa | 31.07s

### Timeline
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 22 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 21 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 29 minutes
- 2026-03-02
  - FAIL 31 seconds

### Error 2026-03-02T11:25:24+00:00
```
2026-03-02T11:25:24.4091958Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:25:26.9895481Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:25:43.6309326Z   
2026-03-02T11:25:58.6335682Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:25:58.6336571Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-03-02T11:25:58.6337017Z         
2026-03-02T11:25:58.6339698Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a573a20b79a8d7dc98dcaa/clusters POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05 of api/atlas/v2/groups/69a573a20b79a8d7dc98dcaa/clusters is no longer available. Reason: Gone. Params: [2024-08-05 api/atlas/v2/groups/69a573a20b79a8d7dc98dcaa/clusters], BadRequestDetail: 
2026-03-02T11:25:58.6341218Z         
2026-03-02T11:25:58.6341583Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T11:25:58.6342327Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T11:25:58.6343013Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T11:25:58.6343340Z         
2026-03-02T11:25:58.8407507Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (31.86s)
```

  - FAIL 31 seconds

### Error 2026-03-02T11:56:30+00:00
```
2026-03-02T11:56:30.7632695Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:56:32.3573350Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:56:58.8961289Z   
2026-03-02T11:57:03.8409350Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-03-02T11:57:03.8410382Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-03-02T11:57:03.8411078Z         
2026-03-02T11:57:03.8414212Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a57aec30346acc7a7dfa47/clusters POST: HTTP 410 Gone (Error code: "VERSION_GONE") Detail: Version 2024-08-05 of api/atlas/v2/groups/69a57aec30346acc7a7dfa47/clusters is no longer available. Reason: Gone. Params: [2024-08-05 api/atlas/v2/groups/69a57aec30346acc7a7dfa47/clusters], BadRequestDetail: 
2026-03-02T11:57:03.8415986Z         
2026-03-02T11:57:03.8416334Z           with mongodbatlas_advanced_cluster.test,
2026-03-02T11:57:03.8417022Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-02T11:57:03.8417655Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-02T11:57:03.8417994Z         
2026-03-02T11:57:04.0498821Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (31.70s)
```

- 2026-03-03 PASS 23 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

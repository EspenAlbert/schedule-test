# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041590000) |  | dev | 4503.01s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09 PASS 25 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T00:41:59+00:00
```
2026-09-11T00:41:59.9070090Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-09-11T00:42:04.5463307Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-09-11T01:54:54.6872321Z   
2026-09-11T01:54:54.6873006Z     resource_migration_v1x_test.go:126: Step 1/5 error: After applying this test step, the non-refresh plan was not empty.
2026-09-11T01:54:54.6873939Z         stdout:
2026-09-11T01:54:54.6874178Z         
2026-09-11T01:54:54.6875042Z         Terraform used the selected providers to generate the following execution
2026-09-11T01:54:54.6875843Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T01:54:54.6876300Z           ~ update in-place
2026-09-11T01:54:54.6876643Z          <= read (data resources)
2026-09-11T01:54:54.6877062Z         
2026-09-11T01:54:54.6877435Z         Terraform will perform the following actions:
2026-09-11T01:54:54.6877760Z         
2026-09-11T01:54:54.6878412Z           # data.mongodbatlas_advanced_cluster.test will be read during apply
2026-09-11T01:54:54.6879044Z           # (depends on a resource or a module with changes pending)
2026-09-11T01:54:54.6879711Z          <= data "mongodbatlas_advanced_cluster" "test" {
2026-09-11T01:54:54.6880423Z               + advanced_configuration               = (known after apply)
2026-09-11T01:54:54.6881138Z               + backup_enabled                       = (known after apply)
2026-09-11T01:54:54.6881928Z               + bi_connector_config                  = (known after apply)
2026-09-11T01:54:54.6882577Z               + cluster_type                         = (known after apply)
2026-09-11T01:54:54.6883509Z               + config_server_management_mode        = (known after apply)
2026-09-11T01:54:54.6885081Z               + config_server_type                   = (known after apply)
2026-09-11T01:54:54.6886368Z               + connection_strings                   = (known after apply)
2026-09-11T01:54:54.6887054Z               + create_date                          = (known after apply)
2026-09-11T01:54:54.6887676Z               + disk_size_gb                         = (known after apply)
2026-09-11T01:54:54.6888313Z               + encryption_at_rest_provider          = (known after apply)
2026-09-11T01:54:54.6888974Z               + global_cluster_self_managed_sharding = (known after apply)
2026-09-11T01:54:54.6889589Z               + id                                   = (known after apply)
2026-09-11T01:54:54.6890189Z               + labels                               = (known after apply)
2026-09-11T01:54:54.6890814Z               + mongo_db_major_version               = (known after apply)
2026-09-11T01:54:54.6891452Z               + mongo_db_version                     = (known after apply)
2026-09-11T01:54:54.6892147Z               + name                                 = "test-acc-tf-c-7994697157006077552"
2026-09-11T01:54:54.6892790Z               + paused                               = (known after apply)
2026-09-11T01:54:54.6893721Z               + pinned_fcv                           = (known after apply)
2026-09-11T01:54:54.6894349Z               + pit_enabled                          = (known after apply)
2026-09-11T01:54:54.6895001Z               + project_id                           = "6aa34e531761787ecbe194ee"
2026-09-11T01:54:54.6895647Z               + redact_client_log_data               = (known after apply)
2026-09-11T01:54:54.6896291Z               + replica_set_scaling_strategy         = (known after apply)
2026-09-11T01:54:54.6896936Z               + replication_specs                    = (known after apply)
2026-09-11T01:54:54.6897572Z               + root_cert_type                       = (known after apply)
2026-09-11T01:54:54.6898181Z               + state_name                           = (known after apply)
2026-09-11T01:54:54.6899242Z               + tags                                 = (known after apply)
2026-09-11T01:54:54.6899970Z               + termination_protection_enabled       = (known after apply)
2026-09-11T01:54:54.6900651Z               + version_release_system               = (known after apply)
2026-09-11T01:54:54.6901039Z             }
2026-09-11T01:54:54.6901274Z         
2026-09-11T01:54:54.6901776Z           # data.mongodbatlas_advanced_clusters.test will be read during apply
2026-09-11T01:54:54.6902409Z           # (depends on a resource or a module with changes pending)
2026-09-11T01:54:54.6902927Z          <= data "mongodbatlas_advanced_clusters" "test" {
2026-09-11T01:54:54.6903685Z               + id         = (known after apply)
2026-09-11T01:54:54.6904271Z               + project_id = "6aa34e531761787ecbe194ee"
2026-09-11T01:54:54.6904752Z               + results    = (known after apply)
2026-09-11T01:54:54.6905082Z             }
2026-09-11T01:54:54.6905306Z         
2026-09-11T01:54:54.6905769Z           # mongodbatlas_advanced_cluster.test will be updated in-place
2026-09-11T01:54:54.6906350Z           ~ resource "mongodbatlas_advanced_cluster" "test" {
2026-09-11T01:54:54.6908679Z                 id                                               = "Y2x1c3Rlcl9pZA==:NmFhMzRlNzJiNWQ3ZWRhNzRmN2RiZWNl-Y2x1c3Rlcl9uYW1l:dGVzdC1hY2MtdGYtYy03OTk0Njk3MTU3MDA2MDc3NTUy-cHJvamVjdF9pZA==:NmFhMzRlNTMxNzYxNzg3ZWNiZTE5NGVl"
2026-09-11T01:54:54.6911115Z                 name                                             = "test-acc-tf-c-7994697157006077552"
2026-09-11T01:54:54.6912113Z                 # (22 unchanged attributes hidden)
2026-09-11T01:54:54.6912652Z         
2026-09-11T01:54:54.6913392Z               ~ replication_specs {
2026-09-11T01:54:54.6914405Z                     id           = "6aa34e72b5d7eda74f7dbe60"
2026-09-11T01:54:54.6915369Z                     # (5 unchanged attributes hidden)
2026-09-11T01:54:54.6916121Z         
2026-09-11T01:54:54.6916704Z                   ~ region_configs {
2026-09-11T01:54:54.6917406Z                         # (4 unchanged attributes hidden)
2026-09-11T01:54:54.6917857Z         
2026-09-11T01:54:54.6918581Z                       ~ electable_specs {
2026-09-11T01:54:54.6919596Z                           ~ instance_size   = "M20" -> "M10"
2026-09-11T01:54:54.6920722Z                             # (4 unchanged attributes hidden)
2026-09-11T01:54:54.6921462Z                         }
2026-09-11T01:54:54.6921932Z         
2026-09-11T01:54:54.6922800Z                         # (2 unchanged blocks hidden)
2026-09-11T01:54:54.6923465Z                     }
2026-09-11T01:54:54.6923880Z                 }
2026-09-11T01:54:54.6924119Z         
2026-09-11T01:54:54.6924554Z                 # (2 unchanged blocks hidden)
2026-09-11T01:54:54.6925053Z             }
2026-09-11T01:54:54.6925275Z         
2026-09-11T01:54:54.6925673Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T01:57:07.6442491Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (4503.10s)
```

  - PASS 57 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING

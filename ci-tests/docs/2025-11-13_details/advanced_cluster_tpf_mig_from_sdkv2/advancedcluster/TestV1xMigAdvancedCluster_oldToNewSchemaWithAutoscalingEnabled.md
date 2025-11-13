# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-27 00:30](#error-2025-10-27t0030380000) |  | dev | 7009.05s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 19 minutes
- 2025-10-20 PASS 17 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 23 minutes
  - PASS 17 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 23 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 19 minutes
- 2025-10-27

### Error 2025-10-27T00:30:38+00:00
```
2025-10-27T00:30:38.3493984Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-27T00:30:41.6932582Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-27T02:24:35.7611716Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-27T02:24:35.7612791Z     resource_migration_v1x_test.go:127: Step 1/5 error: After applying this test step, the non-refresh plan was not empty.
2025-10-27T02:24:35.7613523Z         stdout:
2025-10-27T02:24:35.7613730Z         
2025-10-27T02:24:35.7614470Z         Terraform used the selected providers to generate the following execution
2025-10-27T02:24:35.7615155Z         plan. Resource actions are indicated with the following symbols:
2025-10-27T02:24:35.7615640Z           ~ update in-place
2025-10-27T02:24:35.7615953Z          <= read (data resources)
2025-10-27T02:24:35.7616206Z         
2025-10-27T02:24:35.7616633Z         Terraform will perform the following actions:
2025-10-27T02:24:35.7616921Z         
2025-10-27T02:24:35.7617467Z           # data.mongodbatlas_advanced_cluster.test will be read during apply
2025-10-27T02:24:35.7618119Z           # (depends on a resource or a module with changes pending)
2025-10-27T02:24:35.7618586Z          <= data "mongodbatlas_advanced_cluster" "test" {
2025-10-27T02:24:35.7619244Z               + advanced_configuration               = (known after apply)
2025-10-27T02:24:35.7619923Z               + backup_enabled                       = (known after apply)
2025-10-27T02:24:35.7620587Z               + bi_connector_config                  = (known after apply)
2025-10-27T02:24:35.7621174Z               + cluster_type                         = (known after apply)
2025-10-27T02:24:35.7621814Z               + config_server_management_mode        = (known after apply)
2025-10-27T02:24:35.7622473Z               + config_server_type                   = (known after apply)
2025-10-27T02:24:35.7623439Z               + connection_strings                   = (known after apply)
2025-10-27T02:24:35.7624168Z               + create_date                          = (known after apply)
2025-10-27T02:24:35.7624709Z               + disk_size_gb                         = (known after apply)
2025-10-27T02:24:35.7625260Z               + encryption_at_rest_provider          = (known after apply)
2025-10-27T02:24:35.7625835Z               + global_cluster_self_managed_sharding = (known after apply)
2025-10-27T02:24:35.7626370Z               + id                                   = (known after apply)
2025-10-27T02:24:35.7626878Z               + labels                               = (known after apply)
2025-10-27T02:24:35.7627419Z               + mongo_db_major_version               = (known after apply)
2025-10-27T02:24:35.7627977Z               + mongo_db_version                     = (known after apply)
2025-10-27T02:24:35.7628566Z               + name                                 = "test-acc-tf-c-7225383000165863668"
2025-10-27T02:24:35.7629112Z               + paused                               = (known after apply)
2025-10-27T02:24:35.7629638Z               + pinned_fcv                           = (known after apply)
2025-10-27T02:24:35.7630168Z               + pit_enabled                          = (known after apply)
2025-10-27T02:24:35.7630734Z               + project_id                           = "68febd2c29e7601e4645ec6e"
2025-10-27T02:24:35.7631292Z               + redact_client_log_data               = (known after apply)
2025-10-27T02:24:35.7631855Z               + replica_set_scaling_strategy         = (known after apply)
2025-10-27T02:24:35.7632421Z               + replication_specs                    = (known after apply)
2025-10-27T02:24:35.7633300Z               + root_cert_type                       = (known after apply)
2025-10-27T02:24:35.7633855Z               + state_name                           = (known after apply)
2025-10-27T02:24:35.7634489Z               + tags                                 = (known after apply)
2025-10-27T02:24:35.7635039Z               + termination_protection_enabled       = (known after apply)
2025-10-27T02:24:35.7635606Z               + version_release_system               = (known after apply)
2025-10-27T02:24:35.7636024Z             }
2025-10-27T02:24:35.7636230Z         
2025-10-27T02:24:35.7636670Z           # data.mongodbatlas_advanced_clusters.test will be read during apply
2025-10-27T02:24:35.7637222Z           # (depends on a resource or a module with changes pending)
2025-10-27T02:24:35.7637671Z          <= data "mongodbatlas_advanced_clusters" "test" {
2025-10-27T02:24:35.7638102Z               + id         = (known after apply)
2025-10-27T02:24:35.7638535Z               + project_id = "68febd2c29e7601e4645ec6e"
2025-10-27T02:24:35.7638951Z               + results    = (known after apply)
2025-10-27T02:24:35.7639240Z             }
2025-10-27T02:24:35.7639433Z         
2025-10-27T02:24:35.7639849Z           # mongodbatlas_advanced_cluster.test will be updated in-place
2025-10-27T02:24:35.7640359Z           ~ resource "mongodbatlas_advanced_cluster" "test" {
2025-10-27T02:24:35.7641908Z                 id                                               = "Y2x1c3Rlcl9pZA==:NjhmZWJkMzUyOWU3NjAxZTQ2NDYxNGQ4-Y2x1c3Rlcl9uYW1l:dGVzdC1hY2MtdGYtYy03MjI1MzgzMDAwMTY1ODYzNjY4-cHJvamVjdF9pZA==:NjhmZWJkMmMyOWU3NjAxZTQ2NDVlYzZl"
2025-10-27T02:24:35.7643269Z                 name                                             = "test-acc-tf-c-7225383000165863668"
2025-10-27T02:24:35.7643814Z                 # (22 unchanged attributes hidden)
2025-10-27T02:24:35.7644091Z         
2025-10-27T02:24:35.7644375Z               ~ replication_specs {
2025-10-27T02:24:35.7644859Z                     id           = "68febd3529e7601e464614b2"
2025-10-27T02:24:35.7645340Z                     # (5 unchanged attributes hidden)
2025-10-27T02:24:35.7645615Z         
2025-10-27T02:24:35.7645909Z                   ~ region_configs {
2025-10-27T02:24:35.7646798Z                         # (4 unchanged attributes hidden)
2025-10-27T02:24:35.7647269Z         
2025-10-27T02:24:35.7647604Z                       ~ analytics_specs {
2025-10-27T02:24:35.7648562Z                           ~ instance_size   = "M20" -> "M10"
2025-10-27T02:24:35.7649628Z                             # (4 unchanged attributes hidden)
2025-10-27T02:24:35.7650233Z                         }
2025-10-27T02:24:35.7650590Z         
2025-10-27T02:24:35.7651160Z                       ~ electable_specs {
2025-10-27T02:24:35.7652096Z                           ~ instance_size   = "M20" -> "M10"
2025-10-27T02:24:35.7653259Z                             # (4 unchanged attributes hidden)
2025-10-27T02:24:35.7653875Z                         }
2025-10-27T02:24:35.7654257Z         
2025-10-27T02:24:35.7654686Z                         # (1 unchanged block hidden)
2025-10-27T02:24:35.7655000Z                     }
2025-10-27T02:24:35.7655240Z                 }
2025-10-27T02:24:35.7655435Z         
2025-10-27T02:24:35.7655765Z                 # (2 unchanged blocks hidden)
2025-10-27T02:24:35.7656151Z             }
2025-10-27T02:24:35.7656453Z         
2025-10-27T02:24:35.7656760Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-10-27T02:27:31.2048067Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (7009.52s)
```

- 2025-10-28: MISSING
- 2025-10-29 PASS 23 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 24 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 22 minutes
- 2025-11-03 PASS 21 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS an hour
  - PASS 22 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 26 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 23 minutes
- 2025-11-13 PASS 19 minutes
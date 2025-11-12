# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-06 00:28](#error-2025-10-06t0028090000) |  | dev | flaky_client | 1033.05s
[2025-10-12 00:28](#error-2025-10-12t0028460000) |  | qa |  | 9321.03s
[2025-10-20 00:30](#error-2025-10-20t0030360000) |  | dev | flaky_check | 6321.04s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 29 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06

### Error 2025-10-06T00:28:09+00:00
```
2025-10-06T00:28:09.8574050Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-06T00:28:12.4080222Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-06T00:39:51.3951769Z     resource_migration_v1x_test.go:127: Step 1/5 error: Check failed: error getting independent shard scaling mode: Get "https://cloud-dev.mongodb.comtest/utils/auth/groups/68e30d172a8cab75bf4166ba/clusters/test-acc-tf-c-3493214202052655497/independentShardScalingMode": dial tcp: lookup cloud-dev.mongodb.comtest on 127.0.0.53:53: no such host
2025-10-06T00:45:25.8958932Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (1033.49s)
```

- 2025-10-07 PASS 20 minutes
- 2025-10-08 PASS 22 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 25 minutes
- 2025-10-11 PASS 27 minutes
- 2025-10-12

### Error 2025-10-12T00:28:46+00:00
```
2025-10-12T00:28:46.7197387Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-12T00:28:48.3267182Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-12T03:01:37.0024833Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-12T03:01:37.0025598Z     resource_migration_v1x_test.go:127: Step 1/5 error: Error running apply: exit status 1
2025-10-12T03:01:37.0026016Z         
2025-10-12T03:01:37.0026411Z         Error: Provider produced inconsistent result after apply
2025-10-12T03:01:37.0026743Z         
2025-10-12T03:01:37.0027168Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-12T03:01:37.0027771Z         "provider[\"registry.terraform.io/mongodb/mongodbatlas\"]" produced an
2025-10-12T03:01:37.0028190Z         unexpected new value:
2025-10-12T03:01:37.0028690Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-10-12T03:01:37.0029205Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-12T03:01:37.0029505Z         
2025-10-12T03:01:37.0029942Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-12T03:01:37.0030343Z         issue tracker.
2025-10-12T03:04:09.5828791Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (9321.26s)
```

- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 27 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 31 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 20 minutes
- 2025-10-20

### Error 2025-10-20T00:30:36+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-10-20T00:30:36.520000+00:00-TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled',confidence=1.0,ts_when='23 days ago')

```
2025-10-20T00:30:36.0520742Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-20T00:30:38.7362729Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-20T02:12:24.7310696Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-10-20T02:12:24.7311390Z     resource_migration_v1x_test.go:127: Step 1/5 error: Error running apply: exit status 1
2025-10-20T02:12:24.7311808Z         
2025-10-20T02:12:24.7312183Z         Error: Provider produced inconsistent result after apply
2025-10-20T02:12:24.7312505Z         
2025-10-20T02:12:24.7312935Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-20T02:12:24.7313552Z         "provider[\"registry.terraform.io/mongodb/mongodbatlas\"]" produced an
2025-10-20T02:12:24.7313970Z         unexpected new value:
2025-10-20T02:12:24.7315171Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-10-20T02:12:24.7315706Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-20T02:12:24.7316037Z         
2025-10-20T02:12:24.7316482Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-20T02:12:24.7316895Z         issue tracker.
2025-10-20T02:12:24.7317110Z         
2025-10-20T02:12:24.7317471Z         Error: Provider produced inconsistent result after apply
2025-10-20T02:12:24.7317788Z         
2025-10-20T02:12:24.7318202Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-20T02:12:24.7318817Z         "provider[\"registry.terraform.io/mongodb/mongodbatlas\"]" produced an
2025-10-20T02:12:24.7319230Z         unexpected new value:
2025-10-20T02:12:24.7319727Z         .replication_specs[0].region_configs[0].analytics_specs.instance_size: was
2025-10-20T02:12:24.7320236Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-20T02:12:24.7320536Z         
2025-10-20T02:12:24.7320972Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-20T02:12:24.7321364Z         issue tracker.
2025-10-20T02:16:00.1466825Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (6321.42s)
```

- 2025-10-21: MISSING
- 2025-10-22
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 28 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 23 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 23 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03 PASS 21 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS an hour
  - PASS 22 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 25 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 18 minutes
- 2025-11-10 PASS 22 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 22 minutes
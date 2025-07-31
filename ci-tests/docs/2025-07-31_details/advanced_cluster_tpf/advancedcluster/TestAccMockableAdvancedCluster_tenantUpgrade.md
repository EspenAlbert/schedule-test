# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 04:28](#error-2025-07-10t0428210000) |  | dev | flaky_check | 282.03s
[2025-07-23 12:32](#error-2025-07-23t1232270000) |  | qa |  | 2323.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10
  - FAIL 4 minutes

### Error 2025-07-10T04:28:21+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-10T04:28:21.978000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='21 days ago')

```
2025-07-10T04:28:21.9788733Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9789799Z     resource_advanced_cluster_test.go:167: Adding variable clusterName=test-acc-tf-c-7516699658865863677
2025-07-10T04:28:21.9791515Z     resource_advanced_cluster_test.go:167: Adding variable groupId=686f096b964afc762c202a8e
2025-07-10T04:28:21.9919323Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9980812Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9981783Z     pre_check.go:40: Time before creating cluster: 2025-07-10T03:37:10.518559812Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-7516699658865863677
2025-07-10T04:28:21.9987233Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9987872Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8173326876358460266
2025-07-10T04:28:21.9988680Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8198213403529660366
2025-07-10T04:28:22.0007309Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:22.0007862Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Error running apply: exit status 1
2025-07-10T04:28:22.0008269Z         
2025-07-10T04:28:22.0008631Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0008944Z         
2025-07-10T04:28:22.0009348Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0009945Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0010350Z         unexpected new value:
2025-07-10T04:28:22.0010825Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-07-10T04:28:22.0011652Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-07-10T04:28:22.0011951Z         
2025-07-10T04:28:22.0012375Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0012761Z         issue tracker.
2025-07-10T04:28:22.0012969Z         
2025-07-10T04:28:22.0013317Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0013634Z         
2025-07-10T04:28:22.0014040Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0014631Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0015032Z         unexpected new value:
2025-07-10T04:28:22.0015496Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-07-10T04:28:22.0015931Z         cty.NumberIntVal(3), but now null.
2025-07-10T04:28:22.0016187Z         
2025-07-10T04:28:22.0016602Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0016984Z         issue tracker.
2025-07-10T04:28:22.0017186Z         
2025-07-10T04:28:22.0017529Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0017833Z         
2025-07-10T04:28:22.0018232Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0018941Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0019393Z         unexpected new value:
2025-07-10T04:28:22.0019881Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-07-10T04:28:22.0020302Z         now cty.StringVal("AWS").
2025-07-10T04:28:22.0020541Z         
2025-07-10T04:28:22.0021136Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0021558Z         issue tracker.
2025-07-10T04:28:22.0021766Z         
2025-07-10T04:28:22.0022108Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0022408Z         
2025-07-10T04:28:22.0022808Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0023394Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0023998Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-07-10T04:28:22.0024705Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-07-10T04:28:22.0025017Z         
2025-07-10T04:28:22.0025432Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0025809Z         issue tracker.
2025-07-10T04:28:22.0026113Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (282.30s)
```

  - PASS 14 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 16 minutes
- 2025-07-13 PASS 26 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 15 minutes
- 2025-07-16 PASS 15 minutes
- 2025-07-17 PASS 13 minutes
- 2025-07-18 PASS 27 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 13 minutes
  - FAIL 38 minutes

### Error 2025-07-23T12:32:27+00:00
```
2025-07-23T12:32:27.0242330Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T12:32:27.0242890Z     resource_advanced_cluster_test.go:167: Adding variable groupId=68809a25dafa37582cece141
2025-07-23T12:32:27.0243596Z     resource_advanced_cluster_test.go:167: Adding variable clusterName=test-acc-tf-c-543321474992075603
2025-07-23T12:32:27.0311451Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T12:32:27.0356783Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T12:32:27.0357604Z     pre_check.go:40: Time before creating cluster: 2025-07-23T11:37:12.393521659Z, ProjectID: 68809a25dafa37582cece141, Cluster name: test-acc-tf-c-543321474992075603
2025-07-23T12:32:27.0380662Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T12:32:27.0381352Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5669549735936305166
2025-07-23T12:32:27.0382177Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1615155973165705294
2025-07-23T12:32:27.0483511Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-23T12:32:27.0484076Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Error running apply: exit status 1
2025-07-23T12:32:27.0484487Z         
2025-07-23T12:32:27.0484866Z         Error: Provider produced inconsistent result after apply
2025-07-23T12:32:27.0485191Z         
2025-07-23T12:32:27.0485617Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-23T12:32:27.0486233Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-23T12:32:27.0486712Z         unexpected new value:
2025-07-23T12:32:27.0487399Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-07-23T12:32:27.0487851Z         now cty.StringVal("AWS").
2025-07-23T12:32:27.0488107Z         
2025-07-23T12:32:27.0488555Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-23T12:32:27.0488951Z         issue tracker.
2025-07-23T12:32:27.0489170Z         
2025-07-23T12:32:27.0489683Z         Error: Provider produced inconsistent result after apply
2025-07-23T12:32:27.0490099Z         
2025-07-23T12:32:27.0490526Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-23T12:32:27.0491138Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-23T12:32:27.0491555Z         unexpected new value:
2025-07-23T12:32:27.0492057Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-07-23T12:32:27.0492578Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-07-23T12:32:27.0492880Z         
2025-07-23T12:32:27.0493317Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-23T12:32:27.0493708Z         issue tracker.
2025-07-23T12:32:27.0493928Z         
2025-07-23T12:32:27.0494292Z         Error: Provider produced inconsistent result after apply
2025-07-23T12:32:27.0494609Z         
2025-07-23T12:32:27.0495033Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-23T12:32:27.0495639Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-23T12:32:27.0496051Z         unexpected new value:
2025-07-23T12:32:27.0496531Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-07-23T12:32:27.0496977Z         cty.NumberIntVal(3), but now null.
2025-07-23T12:32:27.0497243Z         
2025-07-23T12:32:27.0497675Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-23T12:32:27.0498073Z         issue tracker.
2025-07-23T12:32:27.0498284Z         
2025-07-23T12:32:27.0498643Z         Error: Provider produced inconsistent result after apply
2025-07-23T12:32:27.0498960Z         
2025-07-23T12:32:27.0499671Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-23T12:32:27.0500366Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-23T12:32:27.0500995Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-07-23T12:32:27.0501548Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-07-23T12:32:27.0501867Z         
2025-07-23T12:32:27.0502300Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-23T12:32:27.0502689Z         issue tracker.
2025-07-23T12:32:27.0503005Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2323.42s)
```

  - PASS 16 minutes
  - PASS 16 minutes
- 2025-07-24 PASS 15 minutes
- 2025-07-25 PASS 16 minutes
- 2025-07-26 PASS 23 minutes
- 2025-07-27 PASS 18 minutes
- 2025-07-28 PASS 15 minutes
- 2025-07-29 PASS 18 minutes
- 2025-07-30 PASS 16 minutes
- 2025-07-31 PASS 21 minutes
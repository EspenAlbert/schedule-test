# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 24) SKIP(x 8) FAIL(x 2)
Success rate: 92.31%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-29 00:29](#error-2025-09-29t0029080000) |  | dev | 4856.08s
[2025-10-01 11:48](#error-2025-10-01t1148420000) |  | dev | 8169.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 SKIP unknown
- 2025-09-04 SKIP unknown
- 2025-09-05: MISSING
- 2025-09-06 SKIP unknown
- 2025-09-07 SKIP unknown
- 2025-09-08
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-09-09 SKIP unknown
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS an hour
- 2025-09-20 PASS an hour
- 2025-09-21 PASS an hour
- 2025-09-22 PASS an hour
- 2025-09-23 PASS an hour
- 2025-09-24 PASS an hour
- 2025-09-25 PASS an hour
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 55 minutes
- 2025-09-28 PASS 52 minutes
- 2025-09-29
  - FAIL an hour

### Error 2025-09-29T00:29:08+00:00
```
2025-09-29T00:29:08.1728527Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-29T00:30:21.8343045Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-29T01:47:14.6231212Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-29T01:47:14.6231758Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-09-29T01:47:14.6232127Z         
2025-09-29T01:47:14.6232504Z         Error: Provider produced inconsistent result after apply
2025-09-29T01:47:14.6232836Z         
2025-09-29T01:47:14.6233266Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-29T01:47:14.6234109Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T01:47:14.6234560Z         unexpected new value:
2025-09-29T01:47:14.6235061Z         .replication_specs[1].region_configs[0].read_only_specs.instance_size: was
2025-09-29T01:47:14.6235588Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-29T01:47:14.6235893Z         
2025-09-29T01:47:14.6236346Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T01:47:14.6236739Z         issue tracker.
2025-09-29T01:47:14.6236953Z         
2025-09-29T01:47:14.6237322Z         Error: Provider produced inconsistent result after apply
2025-09-29T01:47:14.6237635Z         
2025-09-29T01:47:14.6238058Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-29T01:47:14.6238673Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T01:47:14.6239093Z         unexpected new value:
2025-09-29T01:47:14.6239586Z         .replication_specs[1].region_configs[0].electable_specs.instance_size: was
2025-09-29T01:47:14.6240460Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-29T01:47:14.6240813Z         
2025-09-29T01:47:14.6241256Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T01:47:14.6241655Z         issue tracker.
2025-09-29T01:47:14.6241865Z         
2025-09-29T01:47:14.6242227Z         Error: Provider produced inconsistent result after apply
2025-09-29T01:47:14.6242537Z         
2025-09-29T01:47:14.6242958Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-29T01:47:14.6250925Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T01:47:14.6251415Z         unexpected new value:
2025-09-29T01:47:14.6251931Z         .replication_specs[1].region_configs[1].read_only_specs.instance_size: was
2025-09-29T01:47:14.6252452Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-29T01:47:14.6252754Z         
2025-09-29T01:47:14.6253207Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T01:47:14.6253611Z         issue tracker.
2025-09-29T01:51:18.5111502Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (4856.79s)
```

  - PASS 46 minutes
- 2025-09-30
  - PASS 51 minutes
  - PASS 47 minutes
  - PASS 46 minutes
  - PASS 52 minutes
  - PASS 44 minutes
- 2025-10-01
  - PASS 2 hours
  - PASS an hour
  - PASS 56 minutes
  - PASS an hour
  - PASS an hour
  - PASS 54 minutes
  - FAIL 2 hours

### Error 2025-10-01T11:48:42+00:00
```
2025-10-01T11:48:42.0650016Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-01T11:50:16.3187640Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-01T14:02:51.1853148Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-01T14:02:51.1853890Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-10-01T14:02:51.1854466Z         
2025-10-01T14:02:51.1854847Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1855174Z         
2025-10-01T14:02:51.1855627Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1856249Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1856669Z         unexpected new value:
2025-10-01T14:02:51.1857167Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-10-01T14:02:51.1857679Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1858339Z         
2025-10-01T14:02:51.1859186Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1859941Z         issue tracker.
2025-10-01T14:02:51.1860188Z         
2025-10-01T14:02:51.1860824Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1861164Z         
2025-10-01T14:02:51.1861596Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1862223Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1862657Z         unexpected new value:
2025-10-01T14:02:51.1863157Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-10-01T14:02:51.1863674Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1863981Z         
2025-10-01T14:02:51.1864424Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1864822Z         issue tracker.
2025-10-01T14:02:51.1865036Z         
2025-10-01T14:02:51.1865403Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1865719Z         
2025-10-01T14:02:51.1866137Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1866750Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1867167Z         unexpected new value:
2025-10-01T14:02:51.1867656Z         .replication_specs[1].region_configs[0].read_only_specs.instance_size: was
2025-10-01T14:02:51.1868171Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1868469Z         
2025-10-01T14:02:51.1868914Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1869315Z         issue tracker.
2025-10-01T14:02:51.1869533Z         
2025-10-01T14:02:51.1869902Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1870222Z         
2025-10-01T14:02:51.1871031Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1871728Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1872141Z         unexpected new value:
2025-10-01T14:02:51.1872632Z         .replication_specs[1].region_configs[0].analytics_specs.instance_size: was
2025-10-01T14:02:51.1873140Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1873439Z         
2025-10-01T14:02:51.1874047Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1874448Z         issue tracker.
2025-10-01T14:02:51.1874659Z         
2025-10-01T14:02:51.1875018Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1875334Z         
2025-10-01T14:02:51.1875765Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1876369Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1876787Z         unexpected new value:
2025-10-01T14:02:51.1877285Z         .replication_specs[1].region_configs[0].electable_specs.instance_size: was
2025-10-01T14:02:51.1877792Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1878205Z         
2025-10-01T14:02:51.1878640Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1879030Z         issue tracker.
2025-10-01T14:02:51.1879248Z         
2025-10-01T14:02:51.1879611Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1888092Z         
2025-10-01T14:02:51.1888652Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1889423Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1889961Z         unexpected new value:
2025-10-01T14:02:51.1890672Z         .replication_specs[1].region_configs[1].read_only_specs.instance_size: was
2025-10-01T14:02:51.1891199Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1891619Z         
2025-10-01T14:02:51.1892070Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1892590Z         issue tracker.
2025-10-01T14:06:25.8353124Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (8169.53s)
```

  - PASS 46 minutes
- 2025-10-02 PASS 55 minutes
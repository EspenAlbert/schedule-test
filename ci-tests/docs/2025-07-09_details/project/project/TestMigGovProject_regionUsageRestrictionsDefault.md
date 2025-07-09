# project/project/TestMigGovProject_regionUsageRestrictionsDefault Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-27 00:30 | dev | 10.03s
2025-06-08 00:36 | qa | 3.04s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 16 seconds
### 2025-04-12
#### PASS 19 seconds
### 2025-04-13
#### PASS 18 seconds
### 2025-04-14
#### PASS 17 seconds
### 2025-04-15
#### PASS 18 seconds
### 2025-04-16
#### PASS 18 seconds
#### PASS 17 seconds
### 2025-04-17
#### PASS 18 seconds
### 2025-04-18
#### PASS 18 seconds
### 2025-04-19
#### PASS 15 seconds
### 2025-04-20
#### PASS 18 seconds
### 2025-04-21
#### PASS 18 seconds
### 2025-04-22
#### PASS 18 seconds
### 2025-04-23
#### PASS 17 seconds
### 2025-04-24
#### PASS 18 seconds
### 2025-04-25
#### PASS 18 seconds
### 2025-04-26
#### PASS 19 seconds
### 2025-04-27
#### PASS 17 seconds
### 2025-04-28
#### PASS 18 seconds
### 2025-04-29
#### PASS 19 seconds
### 2025-04-30
#### PASS 17 seconds
#### PASS 17 seconds
### 2025-05-01
#### PASS 18 seconds
#### PASS 16 seconds
#### PASS 18 seconds
#### PASS 16 seconds
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 21 seconds
### 2025-05-02
#### PASS 17 seconds
### 2025-05-03
#### PASS 18 seconds
### 2025-05-04
#### PASS 19 seconds
### 2025-05-05
#### PASS 16 seconds
### 2025-05-06
#### PASS 18 seconds
### 2025-05-07
#### PASS 17 seconds
### 2025-05-08
#### PASS 18 seconds
### 2025-05-09
#### PASS 16 seconds
### 2025-05-10
#### PASS 17 seconds
### 2025-05-11
#### PASS 17 seconds
### 2025-05-12
#### PASS 17 seconds
### 2025-05-13
#### PASS 16 seconds
#### PASS 17 seconds
### 2025-05-14
#### PASS 16 seconds
### 2025-05-15
#### PASS 17 seconds
### 2025-05-16
#### PASS 18 seconds
### 2025-05-17
#### PASS 18 seconds
### 2025-05-18
#### PASS 17 seconds
### 2025-05-19
#### PASS 17 seconds
### 2025-05-20
#### PASS 19 seconds
### 2025-05-21
#### PASS 18 seconds
### 2025-05-22
#### PASS 16 seconds
### 2025-05-23
#### PASS 19 seconds
### 2025-05-24
#### PASS 17 seconds
### 2025-05-25
#### PASS 16 seconds
### 2025-05-26
#### PASS 20 seconds
### 2025-05-27
#### FAIL 10 seconds
```
2025-05-27T00:30:17.2288641Z === RUN   TestMigGovProject_regionUsageRestrictionsDefault
2025-05-27T00:30:17.2298405Z === CONT  TestMigGovProject_regionUsageRestrictionsDefault
2025-05-27T00:30:17.2327367Z === NAME  TestMigGovProject_regionUsageRestrictionsDefault
2025-05-27T00:30:17.2328163Z     resource_project_migration_test.go:152: TestStep 2/3 running init: exit status 1
2025-05-27T00:30:17.2328724Z         
2025-05-27T00:30:17.2329032Z         Error: Failed to install provider
2025-05-27T00:30:17.2329323Z         
2025-05-27T00:30:17.2329822Z         Error while installing mongodb/mongodbatlas v1.16.0: github.com: bad response
2025-05-27T00:30:17.2330249Z         code: 403
2025-05-27T00:30:17.2337986Z === NAME  TestMigGovProject_regionUsageRestrictionsDefault
2025-05-27T00:30:17.2338629Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-27T00:30:17.2339076Z         
2025-05-27T00:30:17.2339405Z         Error: Inconsistent dependency lock file
2025-05-27T00:30:17.2339710Z         
2025-05-27T00:30:17.2340139Z         The following dependency selections recorded in the lock file are
2025-05-27T00:30:17.2340653Z         inconsistent with the current configuration:
2025-05-27T00:30:17.2341645Z           - provider registry.terraform.io/mongodb/mongodbatlas: locked version selection 1.15.3 doesn't match the updated version constraints "1.16.0"
2025-05-27T00:30:17.2342261Z         
2025-05-27T00:30:17.2342735Z         To update the locked dependency selections to match a changed configuration,
2025-05-27T00:30:17.2343146Z         run:
2025-05-27T00:30:17.2343439Z           terraform init -upgrade
2025-05-27T00:30:17.2343833Z --- FAIL: TestMigGovProject_regionUsageRestrictionsDefault (10.34s)
```
#### PASS 15 seconds
### 2025-05-28
#### PASS 19 seconds
#### PASS 16 seconds
### 2025-05-29
#### PASS 16 seconds
### 2025-05-30
#### PASS 16 seconds
### 2025-05-31
#### PASS 18 seconds
### 2025-06-01
#### PASS 16 seconds
#### PASS 16 seconds
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 21 seconds
#### PASS 17 seconds
### 2025-06-02
#### PASS 17 seconds
#### PASS 15 seconds
#### PASS 21 seconds
### 2025-06-03
#### PASS 16 seconds
### 2025-06-04
#### PASS 16 seconds
### 2025-06-05
#### PASS 17 seconds
### 2025-06-06
#### PASS 17 seconds
### 2025-06-07
#### PASS 18 seconds
### 2025-06-08
#### FAIL 3 seconds
```
2025-06-08T00:36:20.4532047Z === RUN   TestMigGovProject_regionUsageRestrictionsDefault
2025-06-08T00:36:20.4541784Z === CONT  TestMigGovProject_regionUsageRestrictionsDefault
2025-06-08T00:36:20.4588591Z === NAME  TestMigGovProject_regionUsageRestrictionsDefault
2025-06-08T00:36:20.4589220Z     resource_project_migration_test.go:152: Step 1/3 error: Error running apply: exit status 1
2025-06-08T00:36:20.4589876Z         
2025-06-08T00:36:20.4590295Z         Error: error creating project: test-acc-tf-p-1221031589682336631
2025-06-08T00:36:20.4590661Z         
2025-06-08T00:36:20.4590971Z           with mongodbatlas_project.test,
2025-06-08T00:36:20.4591567Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_project" "test":
2025-06-08T00:36:20.4592120Z           19: 		resource "mongodbatlas_project" "test" {
2025-06-08T00:36:20.4592434Z         
2025-06-08T00:36:20.4592698Z         undefined response type
2025-06-08T00:36:20.4593080Z --- FAIL: TestMigGovProject_regionUsageRestrictionsDefault (3.44s)
```
### 2025-06-09
#### PASS 15 seconds
### 2025-06-10
#### PASS 15 seconds
### 2025-06-11
#### PASS 16 seconds
#### PASS 19 seconds
### 2025-06-12
#### PASS 23 seconds
### 2025-06-13
#### PASS 15 seconds
### 2025-06-14
#### PASS 16 seconds
### 2025-06-15
#### PASS 16 seconds
### 2025-06-16
#### PASS 18 seconds
### 2025-06-17
#### PASS 18 seconds
### 2025-06-18
#### PASS 17 seconds
### 2025-06-19
#### PASS 18 seconds
### 2025-06-20
#### PASS 15 seconds
### 2025-06-21
#### PASS 14 seconds
### 2025-06-22
#### PASS 17 seconds
### 2025-06-23
#### PASS 20 seconds
### 2025-06-24
#### PASS 15 seconds
### 2025-06-25
#### PASS 15 seconds
### 2025-06-26
#### PASS 16 seconds
### 2025-06-27
#### PASS 15 seconds
### 2025-06-28
#### PASS 19 seconds
### 2025-06-29
#### PASS 15 seconds
### 2025-06-30
#### PASS 15 seconds
### 2025-07-01
#### PASS 16 seconds
#### PASS 18 seconds
#### PASS 16 seconds
#### PASS 16 seconds
#### PASS 17 seconds
#### PASS 17 seconds
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 19 seconds
### 2025-07-04
#### PASS 19 seconds
### 2025-07-05
#### PASS 17 seconds
### 2025-07-06
#### PASS 18 seconds
### 2025-07-07
#### PASS 19 seconds
### 2025-07-08
#### PASS 18 seconds
### 2025-07-09
#### PASS 18 seconds
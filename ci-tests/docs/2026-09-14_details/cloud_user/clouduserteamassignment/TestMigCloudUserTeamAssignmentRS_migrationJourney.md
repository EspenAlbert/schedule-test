# cloud_user/clouduserteamassignment/TestMigCloudUserTeamAssignmentRS_migrationJourney Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 3) PASS(x 2)
Success rate: 40.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 00:42](#error-2026-09-11t0042230000) |  | dev | 4.03s
[2026-09-11 06:41](#error-2026-09-11t0641170000) |  | dev | 4.02s
[2026-09-14 00:47](#error-2026-09-14t0047230000) |  | dev | 4.10s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09 PASS 15 seconds
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL 4 seconds

### Error 2026-09-11T00:42:23+00:00
```
2026-09-11T00:42:23.1863356Z === RUN   TestMigCloudUserTeamAssignmentRS_migrationJourney
2026-09-11T00:42:23.1866084Z === CONT  TestMigCloudUserTeamAssignmentRS_migrationJourney
2026-09-11T00:42:23.1877281Z    test_terraform_path=/home/runner/work/_temp/792222c9-100f-4c3c-a451-36cc7d0d9645/terraform test_name=TestMigCloudUserTeamAssignmentRS_migrationJourney test_step_number=1
2026-09-11T00:42:23.1878674Z     resource_migration_test.go:30: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-11T00:42:23.1879231Z         stdout
2026-09-11T00:42:23.1879455Z         
2026-09-11T00:42:23.1880497Z         Terraform used the selected providers to generate the following execution
2026-09-11T00:42:23.1881312Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T00:42:23.1881777Z           ~ update in-place
2026-09-11T00:42:23.1882183Z         
2026-09-11T00:42:23.1882557Z         Terraform will perform the following actions:
2026-09-11T00:42:23.1882887Z         
2026-09-11T00:42:23.1883441Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T00:42:23.1883934Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T00:42:23.1884992Z                 id        = "aWQ=:NmFhMzRlNGExNzYxNzg3ZWNiZTEzZDdm-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T00:42:23.1885950Z                 name      = "team-test-test-acc-tf-2692928233076827410"
2026-09-11T00:42:23.1886394Z               ~ usernames = [
2026-09-11T00:42:23.1887140Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T00:42:23.1887510Z                 ]
2026-09-11T00:42:23.1888113Z                 # (2 unchanged attributes hidden)
2026-09-11T00:42:23.1888443Z             }
2026-09-11T00:42:23.1888666Z         
2026-09-11T00:42:23.1889148Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T00:42:23.1889591Z --- FAIL: TestMigCloudUserTeamAssignmentRS_migrationJourney (4.26s)
```

  - FAIL 4 seconds

### Error 2026-09-11T06:41:17+00:00
```
2026-09-11T06:41:17.6953585Z === RUN   TestMigCloudUserTeamAssignmentRS_migrationJourney
2026-09-11T06:41:17.6956229Z === CONT  TestMigCloudUserTeamAssignmentRS_migrationJourney
2026-09-11T06:41:17.6966439Z   
2026-09-11T06:41:17.6967079Z     resource_migration_test.go:30: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-11T06:41:17.6967630Z         stdout
2026-09-11T06:41:17.6967862Z         
2026-09-11T06:41:17.6968741Z         Terraform used the selected providers to generate the following execution
2026-09-11T06:41:17.6969408Z         plan. Resource actions are indicated with the following symbols:
2026-09-11T06:41:17.6969859Z           ~ update in-place
2026-09-11T06:41:17.6970127Z         
2026-09-11T06:41:17.6970496Z         Terraform will perform the following actions:
2026-09-11T06:41:17.6970824Z         
2026-09-11T06:41:17.6971228Z           # mongodbatlas_team.test will be updated in-place
2026-09-11T06:41:17.6971725Z           ~ resource "mongodbatlas_team" "test" {
2026-09-11T06:41:17.6972617Z                 id        = "aWQ=:NmFhM2EyNzY4MjFlMGVhN2E0NWRiOTNm-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-11T06:41:17.6973425Z                 name      = "team-test-test-acc-tf-901176630246549057"
2026-09-11T06:41:17.6973867Z               ~ usernames = [
2026-09-11T06:41:17.6974358Z                   + "andrea.angiolillo@mongodb.com",
2026-09-11T06:41:17.6974718Z                 ]
2026-09-11T06:41:17.6975341Z                 # (2 unchanged attributes hidden)
2026-09-11T06:41:17.6975675Z             }
2026-09-11T06:41:17.6975903Z         
2026-09-11T06:41:17.6976247Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-11T06:41:17.6976688Z --- FAIL: TestMigCloudUserTeamAssignmentRS_migrationJourney (4.16s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:47:23+00:00
```
2026-09-14T00:47:23.0995854Z === RUN   TestMigCloudUserTeamAssignmentRS_migrationJourney
2026-09-14T00:47:23.0998881Z === CONT  TestMigCloudUserTeamAssignmentRS_migrationJourney
2026-09-14T00:47:23.1009703Z    test_name=TestMigCloudUserTeamAssignmentRS_migrationJourney test_terraform_path=/home/runner/work/_temp/b91eb67a-cba2-4320-9607-7d6c908745b8/terraform test_working_directory=/tmp/plugintest2063416495
2026-09-14T00:47:23.1011737Z     resource_migration_test.go:30: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-14T00:47:23.1012727Z         stdout
2026-09-14T00:47:23.1013125Z         
2026-09-14T00:47:23.1014009Z         Terraform used the selected providers to generate the following execution
2026-09-14T00:47:23.1014661Z         plan. Resource actions are indicated with the following symbols:
2026-09-14T00:47:23.1015112Z           ~ update in-place
2026-09-14T00:47:23.1015377Z         
2026-09-14T00:47:23.1015735Z         Terraform will perform the following actions:
2026-09-14T00:47:23.1016057Z         
2026-09-14T00:47:23.1016447Z           # mongodbatlas_team.test will be updated in-place
2026-09-14T00:47:23.1016930Z           ~ resource "mongodbatlas_team" "test" {
2026-09-14T00:47:23.1018122Z                 id        = "aWQ=:NmFhNzQzZjVkNGUyYjBlY2JkNWEzMzE2-b3JnX2lk:NjQ4MDhkNWYzM2EwYzcxZTg4MmVmMTlj"
2026-09-14T00:47:23.1018949Z                 name      = "team-test-test-acc-tf-2967027996292977591"
2026-09-14T00:47:23.1019390Z               ~ usernames = [
2026-09-14T00:47:23.1019886Z                   + "andrea.angiolillo@mongodb.com",
2026-09-14T00:47:23.1020238Z                 ]
2026-09-14T00:47:23.1020631Z                 # (2 unchanged attributes hidden)
2026-09-14T00:47:23.1020949Z             }
2026-09-14T00:47:23.1021176Z         
2026-09-14T00:47:23.1021514Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-14T00:47:23.1021958Z --- FAIL: TestMigCloudUserTeamAssignmentRS_migrationJourney (4.97s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 10 seconds
- 2026-09-14: MISSING
